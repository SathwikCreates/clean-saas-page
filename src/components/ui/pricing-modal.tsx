"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

interface Plan {
    id: string;
    name: string;
    price: { monthly: number; yearly: number };
    description: string;
    features: string[];
    detailedFeatures: string[];
}

export const PricingModal = ({
    plan,
    isOpen,
    onClose,
    isYearly,
}: {
    plan: Plan | null;
    isOpen: boolean;
    onClose: () => void;
    isYearly: boolean;
}) => {
    const router = useRouter();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!plan || !mounted) return null;

    const price = isYearly ? plan.price.yearly : plan.price.monthly;
    const period = isYearly ? "/year" : "/mo";
    const savings = isYearly ? "Save 20%" : null;

    // Use createPortal to break out of any parent stacking contexts
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5"
                    >
                        {/* Header - Monochrome */}
                        <div className="p-8 bg-zinc-900/50 relative border-b border-white/5">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                            <h2 className="text-2xl font-semibold text-white mb-2 tracking-tight">{plan.name}</h2>
                            <p className="text-zinc-400 font-normal text-sm">{plan.description}</p>
                            <div className="mt-8 flex items-baseline gap-2 text-white">
                                <span className="text-5xl font-medium tracking-tighter">${price}</span>
                                <span className="text-lg opacity-50 font-normal">{period}</span>
                                {savings && isYearly && (
                                    <span className="ml-4 bg-white text-black px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                        {savings}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 bg-zinc-950">
                            <div className="mb-8">
                                <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-wider opacity-70">
                                    Included in {plan.name}
                                </h3>
                                <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                                    {plan.detailedFeatures.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-zinc-300 text-sm">
                                            <div className="bg-white/10 p-1 rounded-full shrink-0">
                                                <Check className="h-3 w-3 text-white" />
                                            </div>
                                            <span className="leading-snug">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Breakdown/Total */}
                            <div className="border-t border-white/5 pt-6 mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="text-xs text-zinc-500 font-medium">
                                    {isYearly ? (
                                        <p>Billed ${price} yearly. Cancel anytime.</p>
                                    ) : (
                                        <p>Billed monthly. Switch to yearly to save 20%.</p>
                                    )}
                                </div>
                                <Button
                                    size="lg"
                                    onClick={() => router.push("/signup")}
                                    className="w-full md:w-auto font-medium text-sm bg-white text-black hover:bg-zinc-200 shadow-lg shadow-white/5 transition-all"
                                >
                                    Confirm Subscription <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};
