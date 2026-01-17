import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function CTA() {
    return (
        <section className="py-32 px-6 max-w-3xl mx-auto text-center">
            <Reveal>
                <h2 className="text-4xl sm:text-6xl font-display font-semibold text-neutral-900 dark:text-white mb-6">
                    Ready to Scale?
                </h2>
                <p className="text-xl text-neutral-600 dark:text-white/60 mb-10">
                    Join 10,000+ agencies utilizing AI to cut costs and boost ROI.
                </p>
                <Link
                    href="/pricing"
                    className="group inline-flex items-center justify-center bg-emerald-500 text-white h-16 px-10 rounded-full text-lg font-semibold shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:scale-105"
                >
                    Get Started Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Reveal>
        </section>
    );
}
