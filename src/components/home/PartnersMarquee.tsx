import { Share2, Search, Video } from "lucide-react";

export default function PartnersMarquee() {
    return (
        <section className="border-y border-neutral-200/50 dark:border-white/5 py-12 overflow-hidden bg-neutral-50/50 dark:bg-transparent">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                    Integrates Seamlessly With
                </p>
            </div>

            <div className="relative flex overflow-hidden mask-linear-gradient">
                <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-16 px-8">
                    <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg">
                        <Share2 className="w-6 h-6 text-blue-500" /> SOCIAL NETWORKS
                    </div>
                    <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg">
                        <Search className="w-6 h-6 text-green-500" /> SEARCH ADS
                    </div>
                    <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg">
                        <Video className="w-6 h-6 text-purple-500" /> VIDEO PLATFORMS
                    </div>

                </div>
                <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-16 px-8">
                    <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg">
                        <Share2 className="w-6 h-6 text-blue-500" /> SOCIAL NETWORKS
                    </div>
                    <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg">
                        <Search className="w-6 h-6 text-green-500" /> SEARCH ADS
                    </div>
                    <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg">
                        <Video className="w-6 h-6 text-purple-500" /> VIDEO PLATFORMS
                    </div>

                </div>
            </div>
        </section>
    );
}
