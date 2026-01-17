"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

export const EasterEggListener = () => {
    const [konami, setKonami] = useState<string[]>([]);
    const [showMatrix, setShowMatrix] = useState(false);

    const SEQUENCE = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
    ];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key;
            setKonami((prev) => {
                const next = [...prev, key].slice(-10);
                if (JSON.stringify(next) === JSON.stringify(SEQUENCE)) {
                    triggerEasterEgg();
                    return [];
                }
                return next;
            });
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const triggerEasterEgg = () => {
        // 1. Fire massive confetti
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });
        }, 250);

        // 2. Show Matrix/God Mode Overlay
        setShowMatrix(true);
        setTimeout(() => setShowMatrix(false), 5000);
    };

    return (
        <AnimatePresence>
            {showMatrix && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center pointer-events-none font-mono text-green-500 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/A06UFEx8jxEwU/giphy.gif')] opacity-10 bg-cover mix-blend-screen" />
                    <div className="z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">SYSTEM OVERRIDE ACTIVATED</h1>
                        <p className="text-xl">AI GOD MODE ENABLED</p>
                        <div className="mt-8 text-sm opacity-70">Enjoy the power.</div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const triggerConfetti = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFE66D'],
        shapes: ['circle', 'square'],
        zIndex: 9999
    });
};
