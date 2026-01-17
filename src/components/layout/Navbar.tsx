"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Platform", href: "/" },
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center items-center pointer-events-none">
            {/* 
              Floating Pill Container 
              - pointer-events-auto so clicks work
              - backdrop-blur and border for glass effect
            */}
            <nav className="pointer-events-auto flex items-center gap-1 bg-black/50 border border-white/10 rounded-full p-1 shadow-lg backdrop-blur-xl">
                {/* Logo (Optional inside pill, or separate? Screenshot implies separate "AdCoach" text outside, but let's put links in pill for now) */}
                {/* Actually screenshot shows "AdCoach" Top Left, and Pill Center. Let's do that. */}

                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "relative px-6 py-2 text-sm font-medium transition-colors rounded-full",
                                isActive
                                    ? "text-white"
                                    : "text-white/60 hover:text-white"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="bubble"
                                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {link.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Separate Logo Positioned Absolute Top-Left to match Screenshot */}
            <div className="absolute left-8 top-2 pointer-events-auto hidden md:block">
                <Link href="/" className="text-xl font-bold tracking-tight text-white/90 hover:text-white transition-colors font-display">
                    AdCoach
                </Link>
            </div>

            {/* Get Started Button Positioned Absolute Top-Right */}
            <div className="absolute right-8 top-0 pointer-events-auto hidden md:block">
                <Link
                    href="/pricing"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
                >
                    Get Started
                </Link>
            </div>
        </header>
    );
}
