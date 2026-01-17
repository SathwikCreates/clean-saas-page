"use client";

import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { PricingModal } from "@/components/ui/pricing-modal";

const PLANS = [
    {
        id: "starter",
        name: "Pilot",
        price: { monthly: 15, yearly: 144 },
        monthlyDisplay: 15,
        yearlyDisplay: 12,
        description: "Calibrate your first models.",
        features: [
            "500 Generative Credits",
            "Basic Pattern Recognition",
            "1 Connected Data Stream",
            "Standard Model Speed",
        ],
        detailedFeatures: [
            "500 AI Video Generation Credits / mo",
            "Basic Ad Pattern Recognition (Meta only)",
            "1 Data Source Connection",
            "Standard Processing Speed",
            "Weekly Performance Report",
            "Email Support",
            "1 User Seat"
        ],
        // Monochrome styling
        style: {
            border: "border-white/5",
            shadow: "shadow-2xl shadow-black/50",
            checkColor: "text-white",
            checkBg: "bg-white/10",
            buttonText: "text-white/70 hover:text-white",
            buttonBorder: "border-white/10 hover:bg-white/5",
        }
    },
    {
        id: "pro",
        name: "Cortex",
        price: { monthly: 50, yearly: 480 },
        monthlyDisplay: 50,
        yearlyDisplay: 40,
        description: "Full autonomous scaling.",
        features: [
            "Unlimited Generative Flow",
            "Predictive Performance Models",
            "Auto-Optimization Agents",
            "Competitor Nueral Intelligence",
            "Priority Model Tuning",
        ],
        detailedFeatures: [
            "Unlimited AI Video Generations",
            "Predictive ROI Analysis Models",
            "Autonomous Bid & Budget Agents",
            "Real-time Competitor Ad Spy",
            "Priority GPU Processing",
            "24/7 Priority Chat Support",
            "5 Team Seats",
            "A/B Testing Automations"
        ],
        popular: true,
        // Monochrome Highlight
        style: {
            border: "border-white/20",
            shadow: "shadow-2xl shadow-white/5",
            badge: "MOST POPULAR",
        }
    },
    {
        id: "enterprise",
        name: "Sovereign",
        price: { monthly: 0, yearly: 0 }, // Custom
        displayCustom: "Custom",
        description: "Market dominance architecture.",
        features: [
            "Custom Model Training",
            "Full Neural API Access",
            "Dedicated AI Architect",
            "On-Premise Deployment",
        ],
        detailedFeatures: [
            "Custom Trained Brand Models",
            "Full API Access & Webhooks",
            "Dedicated Solution Architect",
            "Private Cloud / On-Premise",
            "SSO & Advanced Security",
            "Audit Logs",
            "Unlimited Seats",
            "Custom SLA"
        ],
        style: {
            border: "border-white/5",
            shadow: "shadow-2xl shadow-black/50",
            checkColor: "text-white",
            checkBg: "bg-white/10",
            buttonText: "text-white/70 hover:text-white",
            buttonBorder: "border-white/10 hover:bg-white/5",
        }
    },
];

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const handleSelectPlan = (planId: string) => {
        setSelectedPlan(planId);
    };

    const handleCloseModal = () => {
        setSelectedPlan(null);
    };

    const currentPlan = PLANS.find(p => p.id === selectedPlan) || null;

    return (
        <div className="min-h-screen text-foreground bg-black font-sans selection:bg-white/20">
            <div className="relative h-[50vh] overflow-hidden">
                <HeroSection
                    title="Simple Pricing for"
                    highlightText="Smart Teams"
                    description="Invest in clarity. No hidden fees, cancel anytime."
                    colors={["#0f172a", "#172554", "#1e40af", "#3b82f6", "#06b6d4", "#0891b2"]} // Deep Ocean & Electric Cyan
                    speed={0.3}
                    className="!min-h-[50vh]"
                    buttonClassName="hidden"
                />
            </div>

            <section className="py-24 px-6 container mx-auto max-w-7xl relative min-h-[600px]">
                {/* Toggle - Clean Monochrome Glass */}
                <motion.div
                    className="flex justify-center mb-16"
                    animate={{ opacity: selectedPlan ? 0 : 1, y: selectedPlan ? -20 : 0, pointerEvents: selectedPlan ? "none" : "auto" }}
                >
                    <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={cn("relative z-10 px-8 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300", !isYearly ? "text-black" : "text-white/50 hover:text-white/80")}
                        >
                            Monthly
                            {!isYearly && (
                                <motion.div
                                    layoutId="toggle-highlight"
                                    className="absolute inset-0 bg-white rounded-full shadow-lg -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={cn("relative z-10 px-8 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300", isYearly ? "text-black" : "text-white/50 hover:text-white/80")}
                        >
                            Yearly <span className={cn("ml-1 text-xs font-bold", isYearly ? "text-black/60" : "text-white/60")}>-20%</span>
                            {isYearly && (
                                <motion.div
                                    layoutId="toggle-highlight"
                                    className="absolute inset-0 bg-white rounded-full shadow-lg -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {PLANS.map((plan) => (
                        <motion.div
                            key={plan.id}
                            animate={{
                                opacity: selectedPlan && selectedPlan !== plan.id ? 0 : 1,
                                scale: selectedPlan && selectedPlan !== plan.id ? 0.9 : 1,
                                filter: selectedPlan && selectedPlan !== plan.id ? "blur(10px)" : "blur(0px)",
                            }}
                            transition={{ duration: 0.4 }}
                            className={selectedPlan && selectedPlan !== plan.id ? "pointer-events-none" : ""}
                        >
                            {plan.popular ? (
                                // PRO CARD - Highlighted Clean Glass
                                <Card className="border-white/20 shadow-2xl shadow-white/5 bg-white/5 backdrop-blur-3xl relative overflow-hidden text-white scale-105 z-10 ring-1 ring-white/10">
                                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                                    <CardHeader className="pt-8 pb-4">
                                        <CardTitle className="text-3xl font-medium text-white tracking-tight">
                                            {plan.name}
                                        </CardTitle>
                                        <CardDescription className="text-white/50 font-normal text-sm tracking-wide">{plan.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-8">
                                        <div className="text-6xl font-medium mb-1 text-white tracking-tighter flex items-end gap-1">
                                            ${isYearly ? plan.yearlyDisplay : plan.monthlyDisplay}
                                            <span className="text-sm font-normal text-white/40 mb-2">/mo</span>
                                        </div>
                                        <div className="text-xs text-white/30 font-medium mb-8">Billed {isYearly ? 'yearly' : 'monthly'}</div>
                                        <ul className="space-y-4 relative z-10">
                                            {plan.features.map((item) => (
                                                <li key={item} className="flex items-start gap-3 text-sm text-white/80 font-normal">
                                                    <div className="bg-white text-black p-0.5 rounded-full mt-0.5 flex items-center justify-center w-4 h-4"><Check className="h-2.5 w-2.5" /></div>
                                                    <span className="leading-tight">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="pb-8 pt-0">
                                        <Button
                                            className="w-full bg-white text-black hover:bg-zinc-200 font-medium h-12 text-sm uppercase tracking-wider shadow-lg shadow-white/10"
                                            onClick={() => handleSelectPlan(plan.id)}
                                        >
                                            Activate Cortex
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ) : (
                                // STANDARD CARDS - Minimalist Glass
                                <Card className={cn(
                                    "shadow-xl bg-black/20 backdrop-blur-xl text-white transition-all duration-300 group hover:bg-black/40",
                                    plan.style?.border,
                                    plan.style?.shadow
                                )}>
                                    <CardHeader className="pt-8 pb-4">
                                        <CardTitle className="text-2xl font-medium text-white/90">
                                            {plan.name}
                                        </CardTitle>
                                        <CardDescription className="text-white/40 font-normal text-sm">{plan.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-8">
                                        <div className="text-5xl font-medium mb-1 text-white/90 tracking-tighter flex items-end gap-1">
                                            {plan.displayCustom ? "Custom" : (
                                                <>${isYearly ? plan.yearlyDisplay : plan.monthlyDisplay}<span className="text-sm font-normal text-white/30 mb-2">/mo</span></>
                                            )}
                                        </div>
                                        <div className="text-xs text-white/20 font-medium mb-8 min-h-[16px]">{plan.displayCustom ? '' : `Billed ${isYearly ? 'yearly' : 'monthly'}`}</div>
                                        <ul className="space-y-4">
                                            {plan.features.map((item) => (
                                                <li key={item} className="flex items-start gap-3 text-sm text-white/60 font-normal group-hover:text-white/80 transition-colors">
                                                    <div className={cn("p-0.5 rounded-full mt-0.5 flex items-center justify-center w-4 h-4", plan.style?.checkBg)}>
                                                        <Check className={cn("h-2.5 w-2.5", plan.style?.checkColor)} />
                                                    </div>
                                                    <span className="leading-tight">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="pb-8 pt-0">
                                        <Button
                                            variant="outline"
                                            className={cn("w-full bg-transparent font-medium transition-all h-12 text-sm uppercase tracking-wider", plan.style?.buttonBorder, plan.style?.buttonText)}
                                            onClick={() => handleSelectPlan(plan.id)}
                                        >
                                            {plan.id === 'enterprise' ? "Contact Intelligence" : "Initialize Pilot"}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )}
                        </motion.div>
                    ))}
                </div>

                <PricingModal
                    plan={currentPlan}
                    isOpen={!!selectedPlan}
                    onClose={handleCloseModal}
                    isYearly={isYearly}
                />

            </section>
        </div>
    );
}
