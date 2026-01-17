import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function PricingPreview() {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto" id="pricing-preview">
            <Reveal>
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
                        Pricing Plans
                    </h2>
                    <h3 className="text-4xl sm:text-5xl font-display font-semibold text-neutral-900 dark:text-white">
                        Simple, Transparent Pricing
                    </h3>
                </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Base Plan */}
                <Reveal>
                    <div className="group relative p-8 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-white/[0.08] dark:to-transparent shadow-xl dark:shadow-none h-full backdrop-blur-sm">
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                                Starter
                            </h3>
                            <div className="flex items-baseline gap-2 mt-4">
                                <span className="text-5xl font-display font-bold text-neutral-900 dark:text-white">
                                    $15
                                </span>
                                <span className="text-neutral-500">/month</span>
                            </div>

                        </div>
                        <ul className="space-y-4 mb-8 text-neutral-600 dark:text-white/70 text-sm">
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-emerald-500" /> Real-time Dashboard
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-emerald-500" /> Basic Performance Analysis
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-emerald-500" /> 5 Video Generations/mo
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-emerald-500" /> Watermarked Videos
                            </li>
                        </ul>
                        <button className="w-full h-12 rounded-xl border border-neutral-900 dark:border-white text-neutral-900 dark:text-white font-semibold hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors">
                            Start Building for Free
                        </button>
                    </div>
                </Reveal>

                {/* Premium Plan */}
                <Reveal delay={0.1}>
                    <div className="group relative p-8 rounded-3xl border border-emerald-500/50 bg-emerald-500/5 dark:bg-gradient-to-b dark:from-emerald-500/[0.15] dark:to-emerald-500/[0.02] shadow-2xl shadow-emerald-500/10 dark:shadow-emerald-500/20 h-full backdrop-blur-sm">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            Most Popular
                        </div>
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                                Growth
                            </h3>
                            <div className="flex items-baseline gap-2 mt-4">
                                <span className="text-5xl font-display font-bold text-neutral-900 dark:text-white">
                                    $50
                                </span>
                                <span className="text-neutral-500">/month</span>
                            </div>

                        </div>
                        <ul className="space-y-4 mb-8 text-neutral-600 dark:text-white/70 text-sm">
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-emerald-500" /> Advanced AI Insights
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-emerald-500" /> Neural Voice Synthesis
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-emerald-500" /> Unlimited Video Generation
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-emerald-500" /> No Watermark
                            </li>
                        </ul>
                        <button className="w-full h-12 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/25">
                            Scale with Growth
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
