"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    // Spotlight Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Parallax Logic
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Header moves slightly faster/slower to create depth
    const headerY = useTransform(scrollYProgress, [0, 1], [0, -20]);

    return (
        <div
            ref={ref}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black/40 dark:border-white/10 bg-white/5 border border-white/10 backdrop-blur-md justify-between flex flex-col space-y-4 relative overflow-hidden",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/bento:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          650px circle at ${mouseX}px ${mouseY}px,
                          rgba(255,255,255,0.1),
                          transparent 80%
                        )
                    `,
                }}
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
                <motion.div style={{ y: headerY }} className="transition-transform duration-200 ease-out">
                    {header}
                </motion.div>
                <div className="group-hover/bento:translate-x-2 transition duration-200 mt-4 relative z-20 bg-black/20 p-2 rounded-lg backdrop-blur-sm border border-white/5">
                    {icon}
                    <div className="font-heading font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 font-display">
                        {title}
                    </div>
                    <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 font-sans">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};
