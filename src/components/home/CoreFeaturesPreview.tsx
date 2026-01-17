import Link from "next/link";
import { BrainCircuit, Clapperboard, Share2, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function CoreFeaturesPreview() {
    return (
        <section className="py-32 bg-neutral-50/50 dark:bg-black border-t border-neutral-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <Reveal>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
                                Core Technology
                            </h2>
                            <h3 className="text-4xl sm:text-5xl font-display font-semibold text-neutral-900 dark:text-white">
                                AI-Driven Advertising
                            </h3>
                        </div>
                        <Link
                            href="/features"
                            className="hidden md:inline-flex items-center text-sm font-semibold text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-white/30 hover:border-emerald-500 pb-1 transition-colors"
                        >
                            All Capabilities <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <Reveal delay={0.1} className="h-full">
                        <div className="h-full p-8 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-white/[0.08] dark:to-transparent border border-neutral-100 dark:border-white/10 shadow-xl shadow-neutral-200/50 dark:shadow-none hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group backdrop-blur-sm">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                                <BrainCircuit className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                                Autonomous Reasoning Engine
                            </h4>
                            <p className="text-neutral-500 dark:text-white/60 text-sm mb-6">
                                Diagnose low CTR and CPM using advanced locally-run reasoning models
                                optimized for advertising metrics.
                            </p>
                        </div>
                    </Reveal>

                    {/* Feature 2 */}
                    <Reveal delay={0.2} className="h-full">
                        <div className="h-full p-8 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-white/[0.08] dark:to-transparent border border-neutral-100 dark:border-white/10 shadow-xl shadow-neutral-200/50 dark:shadow-none hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group backdrop-blur-sm">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform">
                                <Clapperboard className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                                Generative Video Synthesis
                            </h4>
                            <p className="text-neutral-500 dark:text-white/60 text-sm mb-6">
                                Create high-fidelity 10-60s video ads automatically using state-of-the-art
                                video and voice synthesis models.
                            </p>
                        </div>
                    </Reveal>

                    {/* Feature 3 */}
                    <Reveal delay={0.3} className="h-full">
                        <div className="h-full p-8 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-white/[0.08] dark:to-transparent border border-neutral-100 dark:border-white/10 shadow-xl shadow-neutral-200/50 dark:shadow-none hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group backdrop-blur-sm">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
                                <Share2 className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                                Multi-Platform Sync
                            </h4>
                            <p className="text-neutral-500 dark:text-white/60 text-sm mb-6">
                                Unified dashboard for Meta, Google, and TikTok. Compare ROI across
                                all channels instantly.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
