"use client";

import { motion } from "framer-motion";

export const GraphicDashboard = () => {
    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 p-4 border border-white/10 relative overflow-hidden group/graphic">
            <div className="flex flex-col gap-2 w-full h-full">
                <div className="flex gap-2 items-center">
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                </div>
                <div className="mt-2 flex gap-2 w-full h-full">
                    <div className="w-1/3 bg-white/10 rounded-md h-full animate-pulse" style={{ animationDuration: "2s" }} />
                    <div className="w-2/3 flex flex-col gap-2">
                        <div className="h-1/2 bg-white/10 rounded-md w-full" />
                        <div className="h-1/2 bg-white/5 rounded-md w-full flex gap-1 items-end p-1">
                            {[40, 70, 50, 90, 60].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    className="flex-1 bg-white/20 rounded-sm"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const GraphicVideo = () => {
    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/10 relative overflow-hidden flex items-center justify-center group/graphic">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20" />
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 cursor-pointer z-10"
            >
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
            </motion.div>
            {/* Mock Timeline */}
            <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-full bg-white/50"
                />
            </div>
        </div>
    );
};

export const GraphicChat = () => {
    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-white/10 relative overflow-hidden p-4 flex flex-col justify-end gap-2 group/graphic">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="self-start max-w-[80%] bg-white/10 p-2 rounded-2xl rounded-tl-sm text-[10px] text-neutral-400"
            >
                This ad creative is underperforming.
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="self-end max-w-[80%] bg-blue-500/20 p-2 rounded-2xl rounded-tr-sm text-[10px] text-blue-200 border border-blue-500/30"
            >
                Try changing the hook to...
            </motion.div>
        </div>
    );
};

export const GraphicConnect = () => {
    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-white/10 relative overflow-hidden p-4 flex items-center justify-center gap-4 group/graphic">
            <div className="h-10 w-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center relative">
                <div className="h-2 w-2 bg-blue-400 rounded-full animate-ping absolute top-0 right-0" />
            </div>
            <motion.div
                animate={{ width: [0, 50, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-[2px] bg-white/20 rounded-full"
            />
            <div className="h-10 w-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center" />
        </div>
    );
};
