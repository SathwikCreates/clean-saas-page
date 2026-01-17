import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function Hero() {
    return (
        <section className="relative pt-12 pb-24 sm:pt-24 sm:pb-32 px-6 text-center max-w-5xl mx-auto">
            <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-8 hover:bg-emerald-500/20 transition-colors cursor-default">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Powered by Next-Gen Generative AI
                </div>
                <h1 className="text-5xl sm:text-7xl md:text-8xl tracking-tighter font-display font-semibold text-neutral-900 dark:text-white mb-8 leading-[1.1]">
                    Generate High-Converting <br className="hidden sm:block" /> Ads with AI
                </h1>
                <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    Stop guessing what works. AdCoach analyzes your cross-platform ad performance
                    in real-time to generate data-backed video creatives that scale.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/pricing"
                        className="w-full sm:w-auto group relative inline-flex items-center justify-center bg-neutral-900 dark:bg-emerald-500 text-white dark:text-white h-14 px-8 rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20"
                    >
                        <span>Start Free Trial</span>
                        <svg
                            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </Link>
                    <Link
                        href="/features"
                        className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white h-14 px-8 rounded-full text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
                    >
                        View Features
                    </Link>
                </div>
            </Reveal>
        </section>
    );
}
