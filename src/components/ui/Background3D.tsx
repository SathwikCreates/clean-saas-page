"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

const vertexShader = `
uniform float uTime; uniform float uDistortion; uniform float uSize; uniform vec2 uMouse; varying float vAlpha; varying vec3 vPos; varying float vNoise;
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; } vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; } vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); } vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; } float snoise(vec3 v) { const vec2 C = vec2(1.0/6.0, 1.0/3.0) ; const vec4 D = vec4(0.0, 0.5, 1.0, 2.0); vec3 i = floor(v + dot(v, C.yyy) ); vec3 x0 = v - i + dot(i, C.xxx) ; vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g; vec3 i1 = min( g.xyz, l.zxy ); vec3 i2 = max( g.xyz, l.zxy ); vec3 x1 = x0 - i1 + 1.0 * C.xxx; vec3 x2 = x0 - i2 + 2.0 * C.xxx; vec3 x3 = x0 - 1.0 + 3.0 * C.xxx; i = mod289(i); vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 )); float n_ = 1.0/7.0; vec3 ns = n_ * D.wyz - D.xzx; vec4 j = p - 49.0 * floor(p * ns.z *ns.z); vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_ ); vec4 x = x_ *ns.x + ns.yyyy; vec4 y = y_ *ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y); vec4 b0 = vec4( x.xy, y.xy ); vec4 b1 = vec4( x.zw, y.zw ); vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0)); vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ; vec3 p0 = vec3(a0.xy,h.x); vec3 p1 = vec3(a0.zw,h.y); vec3 p2 = vec3(a1.xy,h.z); vec3 p3 = vec3(a1.zw,h.w); vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3))); p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w; vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m; return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) ); }
void main() { vec3 pos = position; float noiseFreq = 0.5; float noiseAmp = uDistortion; float noise = snoise(vec3(pos.x * noiseFreq + uTime * 0.1, pos.y * noiseFreq, pos.z * noiseFreq)); vNoise = noise; vec3 newPos = pos + (normalize(pos) * noise * noiseAmp); float dist = distance(uMouse * 10.0, newPos.xy); float interaction = smoothstep(5.0, 0.0, dist); newPos += normalize(pos) * interaction * 0.5; vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0); gl_Position = projectionMatrix * mvPosition; gl_PointSize = uSize * (24.0 / -mvPosition.z) * (1.0 + noise * 0.5); vAlpha = 1.0; vPos = newPos; }
`;

const fragmentShader = `
uniform vec3 uColor; uniform float uOpacity; varying float vNoise; varying vec3 vPos;
void main() { vec2 center = gl_PointCoord - vec2(0.5); float dist = length(center); if (dist > 0.5) discard; float alpha = smoothstep(0.5, 0.2, dist) * uOpacity; vec3 darkColor = uColor * 0.5; vec3 lightColor = uColor * 1.8; vec3 finalColor = mix(darkColor, lightColor, vNoise * 0.5 + 0.5); gl_FragColor = vec4(finalColor, alpha); }
`;

export default function Background3D() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { theme, resolvedTheme } = useTheme();

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.02);

        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 18);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const systemsGroup = new THREE.Group();
        systemsGroup.position.x = 4.5;
        scene.add(systemsGroup);

        const geometry = new THREE.IcosahedronGeometry(4.5, 16);

        // Initial colors based on theme, default to dark logic if unknown
        const initialColor = theme === 'light' ? '#047857' : '#10b981';
        const initialOpacity = theme === 'light' ? 0.8 : 0.6;

        const uniforms = {
            uTime: { value: 0 },
            uDistortion: { value: 0.6 },
            uSize: { value: 2.5 },
            uColor: { value: new THREE.Color(initialColor) },
            uOpacity: { value: initialOpacity },
            uMouse: { value: new THREE.Vector2(0, 0) }
        };

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms,
            transparent: true,
            depthWrite: false,
            blending: THREE.NormalBlending
        });

        const particles = new THREE.Points(geometry, material);
        systemsGroup.add(particles);

        // Initial check for screen size
        if (window.innerWidth < 768) {
            systemsGroup.position.set(0, 2, -5);
            systemsGroup.scale.set(0.8, 0.8, 0.8);
        }

        let time = 0;

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            if (window.innerWidth < 768) {
                systemsGroup.position.set(0, 2, -5);
                systemsGroup.scale.set(0.8, 0.8, 0.8);
            } else {
                systemsGroup.position.set(4.5, 0, 0);
                systemsGroup.scale.set(1, 1, 1);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            // Smooth interpolation in animation loop or just direct assignment here
            // For smoothness like original, we'll interpolate in animate loop using a target
            targetMouse.x = mouseX;
            targetMouse.y = mouseY;
        };

        const targetMouse = { x: 0, y: 0 };

        window.addEventListener('resize', handleResize);
        document.addEventListener('mousemove', handleMouseMove);

        let animationId: number = 0;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            time += 0.01;

            systemsGroup.rotation.y = time * 0.05;
            systemsGroup.rotation.z = time * 0.02;

            uniforms.uTime.value = time;

            // Interpolate mouse
            uniforms.uMouse.value.x += (targetMouse.x - uniforms.uMouse.value.x) * 0.05;
            uniforms.uMouse.value.y += (targetMouse.y - uniforms.uMouse.value.y) * 0.05;

            renderer.render(scene, camera);
        };

        animate();

        // Store refs for cleanup/updates
        (container as any)._three = { uniforms, renderer, scene, animationId };

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
        };
    }, []); // Run once on mount

    // Watch for theme changes significantly
    useEffect(() => {
        if (!containerRef.current) return;
        const threeData = (containerRef.current as any)._three;
        if (threeData && threeData.uniforms) {
            const isDark = resolvedTheme === 'dark';

            if (!isDark) {
                threeData.uniforms.uColor.value.set('#047857'); // Dark green for light mode visibility
                threeData.uniforms.uOpacity.value = 0.8;
            } else {
                threeData.uniforms.uColor.value.set('#10b981'); // Emerald for dark mode
                threeData.uniforms.uOpacity.value = 0.6;
            }
        }
    }, [resolvedTheme]);

    // Noise Overlay CSS
    // Check resolved for noise too, though simpler to use CSS class on body. 
    // But since this is inline style:
    // Actually, we can't easily access resolvedTheme inside the render without hook return value
    // Let's rely on the useEffect above for uniforms. For the overlay, let's use CSS classes if possible, 
    // or just assume 'dark' default if unknown to avoid flash.
    // Better: use the 'resolvedTheme' from next-themes if provided.

    return (
        <>
            <div
                className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 transition-opacity duration-300"
                style={{
                    opacity: resolvedTheme === 'light' ? 0.05 : 0.03,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
            <div className="fixed top-0 left-0 w-full h-[120vh] -z-10 overflow-hidden pointer-events-none transition-all duration-700">
                <div ref={containerRef} className="w-full h-full opacity-100 dark:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/60 dark:from-black/10 dark:via-transparent dark:to-black/80 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none dark:block hidden" />
            </div>
        </>
    );
}
