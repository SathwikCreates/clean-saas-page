"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 40, scale: 0.98, filter: "blur(5px)" },
                visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
