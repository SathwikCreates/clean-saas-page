"use client";

import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard, Video, Bot, Sparkles, CreditCard, Lightbulb, ShieldCheck } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { GraphicDashboard, GraphicVideo, GraphicChat, GraphicConnect } from "@/components/ui/bento-graphics";

export default function FeaturesPage() {
    const features = [
        {
            icon: LayoutDashboard,
            title: "Multi-Platform Dashboard",
            description: "Connect Meta, Google (YouTube), and TikTok Ads in one screen. No tab switching. View real-time aggregated data from all your campaigns.",
            graphic: <GraphicDashboard />
        },
        {
            icon: Video,
            title: "AI Video Generation",
            description: "Type text → Get video. Includes AI voiceovers and background music. Base plan ($15/mo) for watermarked, Premium ($50/mo) for professional 10-60s videos.",
            graphic: <GraphicVideo />
        },
        {
            icon: Bot,
            title: "AI Analysis Bots",
            description: "4 specialists working for you: Performance Bot (money leaks), Creative Bot (copy/images), Platform Specialist (secrets), and Recommendation Engine.",
            graphic: <GraphicChat />
        },
        {
            icon: Sparkles,
            title: "Smart Onboarding",
            description: "Start with 'Do you have an idea?'. If Yes: AI improves it. If No: AI gives you ideas. Simple approve, edit, or reject flow.",
            graphic: <GraphicConnect />
        },
        {
            icon: CreditCard,
            title: "Clear Pricing",
            description: "Simple tiering. Base ($15/mo) for 1 account/platform & insights. Premium ($50/mo) for 2 accounts/platform, 3 pro videos, voice cloning & JSON export.",
            graphic: <GraphicDashboard />
        },
        {
            icon: Lightbulb,
            title: "Actionable Insights",
            description: "Not just data—specific instructions. 'Cut first 2s', 'Change headline to X', 'CTR will improve by 2.3x'. We tell you exactly what to fix.",
            graphic: <GraphicChat />
        },
        {
            icon: ShieldCheck,
            title: "Read-Only Access",
            description: "Zero risk. We connect via read-only APIs to analyze and advise. We cannot spend your money or change your campaigns.",
            graphic: <GraphicConnect />
        },
    ];

    return (
        <div className="min-h-screen text-foreground">
            {/* 
                Subtle Hero for Features
                Adjusted height and text to be a "Header" rather than full landing hero.
             */}
            <div className="relative h-[50vh] overflow-hidden">
                <HeroSection
                    title="Powerful Features for"
                    highlightText="Modern Growth"
                    description="Explore the tools that give you an unfair advantage."
                    // Slightly darker/different palette for Features to distinguish it
                    // Digital Dopamine: High-saturation spectrum to stimulate engagement
                    colors={["#c026d3", "#7c3aed", "#2563eb", "#0891b2", "#059669", "#d97706"]}
                    speed={0.25}
                    className="!min-h-[50vh]"
                    buttonClassName="hidden" // Hide button for the header version
                />
            </div>

            <section className="py-24 px-6 container mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <Badge variant="outline" className="mb-4">Capabilities</Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Built for Speed & Precision
                    </h2>
                </div>

                <BentoGrid className="max-w-4xl mx-auto">
                    {features.map((feature, index) => (
                        <BentoGridItem
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={<feature.icon className="h-6 w-6 text-white" />}
                            className={index === 3 || index === 6 ? "md:col-span-2" : ""}
                            header={
                                feature.graphic || <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 opacity-20" />
                            }
                        />

                    ))}
                </BentoGrid>
            </section>
        </div>
    );
}
