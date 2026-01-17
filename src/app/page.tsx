"use client";

import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";
import WhisperText from "@/components/ui/whisper-text";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Video, UserCheck, ArrowRight } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { GraphicDashboard, GraphicVideo, GraphicChat } from "@/components/ui/bento-graphics";
import { triggerConfetti } from "@/components/ui/easter-egg-listener";
import { Reveal } from "@/components/ui/Reveal";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TextReveal } from "@/components/ui/text-reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 
        Hero Section 
        Using the "Premium" shader background as the main visual anchor.
      */}
      <HeroSection
        title="Intelligent AI Agents for"
        highlightText="Ad Performance, Meta Ads, Search Ads, TikTok Ads"
        description="Stop feeling stupid about ads. Start feeling in control. An AI platform that connects to your ads, analyzes performance, and tells you exactly what to fix."
        buttonText="Get Started"
        // Using a sophisticated, slightly more muted/premium palette
        colors={["#FF6B6B", "#4ECDC4", "#45B7D1", "#F7FFF7", "#FFE66D", "#FF6B6B"]}
        speed={0.4}
      />

      {/* Trusted By & Stats Section */}
      <Reveal className="py-12 relative z-20">
        <div className="container mx-auto px-6 mb-12">
          <p className="text-center text-sm font-medium text-white/30 mb-8 uppercase tracking-[0.2em]">Trusted by fast-moving brands</p>
          <InfiniteMovingLogos
            items={[
              { name: "Meta", icon: <Facebook className="w-6 h-6" /> },
              { name: "Google", icon: <Youtube className="w-6 h-6" /> },
              { name: "TikTok", icon: <Video className="w-6 h-6" /> },
              { name: "Linkedin", icon: <Linkedin className="w-6 h-6" /> },
              { name: "Twitter", icon: <Twitter className="w-6 h-6" /> },
              { name: "Instagram", icon: <Instagram className="w-6 h-6" /> },
            ]}
            speed="normal"
          />
        </div>

        {/* Unified Glass Stats Strip */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 md:divide-x md:divide-white/10">
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 flex justify-center items-center gap-1 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                <AnimatedCounter value={500} />+
              </div>
              <div className="text-sm font-medium text-white/40 uppercase tracking-wider">Active Users</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 flex justify-center items-center gap-1 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                $<AnimatedCounter value={12} />M+
              </div>
              <div className="text-sm font-medium text-white/40 uppercase tracking-wider">Ad Spend Managed</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 flex justify-center items-center gap-1 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                <AnimatedCounter value={8500} />
              </div>
              <div className="text-sm font-medium text-white/40 uppercase tracking-wider">Creatives Generated</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 flex justify-center items-center gap-1 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                <AnimatedCounter value={98} />%
              </div>
              <div className="text-sm font-medium text-white/40 uppercase tracking-wider">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 
        Minimalistic Value Prop Section
        Glassmorphism applied to float on top of the shader.
      */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4 border-white/20 text-white bg-white/5 backdrop-blur-md">The Solution</Badge>
            <div className="flex flex-col items-center justify-center">
              <TextReveal
                text="Everything you need."
                className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-white justify-center"
              />
              <TextReveal
                text="Nothing you don't."
                className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white/50 justify-center"
              />
            </div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mt-6">
              We replaced complex dashboards with three magic parts that actually do the work for you.
            </p>
          </div>

          <BentoGrid className="max-w-4xl mx-auto">
            {/* Feature 1 */}
            <BentoGridItem
              title="See Everything"
              description="One screen for Meta, Google, and TikTok. No more tab switching. AI highlights exactly what's broken in real-time."
              icon={<Eye className="h-6 w-6 text-white" />}
              header={<GraphicDashboard />}
            />

            {/* Feature 2 */}
            <BentoGridItem
              title="Make Stuff"
              description="Type an idea, get a video. From watermarked tests to premium voice-cloned ads, our AI factory builds it for you."
              icon={<Video className="h-6 w-6 text-white" />}
              header={<GraphicVideo />}
            />

            {/* Feature 3 */}
            <BentoGridItem
              title="Fix It Coach"
              description='Four AI specialists analyze your data and talk back plainly. "This headline sucks. Try this instead."'
              icon={<UserCheck className="h-6 w-6 text-white" />}
              header={<GraphicChat />}
            />
          </BentoGrid>
        </div>
      </section>

      {/* 
        Emotional/Trust Section
        Using WhisperText for a single powerful statement.
      */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <WhisperText
            text="You don't need to be an ad genius."
            className="text-3xl md:text-5xl font-bold text-white mb-8"
            delay={50}
          />
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Join thousands of marketers who stopped guessing and started growing.
          </p>
          <div className="flex justify-center">
            <Magnetic>
              <ShimmerButton onClick={triggerConfetti} className="shadow-2xl">
                <span className="flex items-center gap-2 whitespace-nowrap">
                  Join the Waitlist <ArrowRight className="h-4 w-4" />
                </span>
              </ShimmerButton>
            </Magnetic>
          </div>
        </div>
      </section>

    </div>
  );
}
