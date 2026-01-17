"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    // User reported lag. Disabling scroll hijacking for native performance.
    return <>{children}</>;
}
