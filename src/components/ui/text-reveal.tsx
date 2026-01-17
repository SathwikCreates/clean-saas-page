"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "p";
}

export const TextReveal = ({ text, className, as: Tag = "h2" }: TextRevealProps) => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.6"], // Start revealing when top of element hits 90% of viewport, finish at 60%
    });

    const words = text.split(" ");

    return (
        <Tag ref={element} className={cn("flex flex-wrap gap-x-[0.25em] relative z-10", className)}>
            <span className="sr-only">{text}</span>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </Tag>
    );
};

const Word = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    const y = useTransform(progress, range, [20, 0]); // Slide up instead of blur (much cheaper)

    return (
        <span className="relative inline-block mr-[0.25em]">
            <span className="absolute opacity-0">{children}</span>
            <motion.span style={{ opacity, y }} className="inline-block">
                {children}
            </motion.span>
        </span>
    );
};
