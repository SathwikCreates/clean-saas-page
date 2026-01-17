"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Magnetic } from "@/components/ui/magnetic";
import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Zod Schema
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Shader - Reusing styling from Home for consistency */}
            <div className="absolute inset-0 z-0">
                <HeroSection
                    title=""
                    highlightText=""
                    description=""
                    buttonClassName="hidden"
                    colors={["#450a0a", "#7f1d1d", "#b91c1c", "#ea580c", "#fb923c", "#fdba74"]} // Sunset Ember Palette
                    speed={0.25}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-full max-w-lg mx-auto p-4"
            >
                <div className="bg-black/30 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-2xl ring-1 ring-white/5">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Get in Touch</h1>
                        <p className="text-white/60 text-sm">
                            Have questions about our AI models? We're here to help.
                        </p>
                    </div>

                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-6 text-center"
                        >
                            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                                <Send className="w-6 h-6" />
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-1">Message Sent!</h3>
                            <p className="text-white/60 text-sm">We'll get back to you within 24 hours.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-4">
                                {/* Name */}
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-white/80 text-xs uppercase tracking-wider font-semibold">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Enter your name"
                                        disabled={isSubmitting}
                                        {...register("name")}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-white/20 focus:ring-0 transition-all duration-300 h-11"
                                    />
                                    {errors.name && (
                                        <p className="text-red-400 text-xs">{errors.name.message}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-white/80 text-xs uppercase tracking-wider font-semibold">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        disabled={isSubmitting}
                                        {...register("email")}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-white/20 focus:ring-0 transition-all duration-300 h-11"
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-xs">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Subject */}
                                <div className="space-y-2">
                                    <Label htmlFor="subject" className="text-white/80 text-xs uppercase tracking-wider font-semibold">Subject</Label>
                                    <Input
                                        id="subject"
                                        placeholder="How can we help?"
                                        disabled={isSubmitting}
                                        {...register("subject")}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-white/20 focus:ring-0 transition-all duration-300 h-11"
                                    />
                                    {errors.subject && (
                                        <p className="text-red-400 text-xs">{errors.subject.message}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-white/80 text-xs uppercase tracking-wider font-semibold">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your project..."
                                        disabled={isSubmitting}
                                        {...register("message")}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-white/20 focus:ring-0 transition-all duration-300 min-h-[120px] resize-none"
                                    />
                                    {errors.message && (
                                        <p className="text-red-400 text-xs">{errors.message.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="pt-2 flex justify-center">
                                <Magnetic>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto min-w-[200px] h-12 bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-wider text-sm transition-all shadow-lg shadow-white/5"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </Button>
                                </Magnetic>
                            </div>
                        </form>
                    )}
                </div>
            </motion.div>

            {/* FAQ Section - Glassmorphic Accordion */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="relative z-10 w-full max-w-2xl mx-auto px-4 pb-24 mt-8"
            >
                <h2 className="text-2xl font-bold text-white mb-8 text-center tracking-tight">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border border-white/10 bg-black/20 backdrop-blur-md rounded-xl px-4 data-[state=open]:bg-black/40 transition-colors">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white/80 transition-colors py-4 font-medium">
                            How does the AI generation work?
                        </AccordionTrigger>
                        <AccordionContent className="text-white/60 pb-4 leading-relaxed">
                            Our AI analyzes your prompt and brand guidelines to generate high-converting video creatives. It uses a combination of stock footage, motion graphics, and text-to-voice technology.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-white/10 bg-black/20 backdrop-blur-md rounded-xl px-4 data-[state=open]:bg-black/40 transition-colors">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white/80 transition-colors py-4 font-medium">
                            Can I cancel my subscription anytime?
                        </AccordionTrigger>
                        <AccordionContent className="text-white/60 pb-4 leading-relaxed">
                            Yes, you can pause or cancel your subscription at any time. There are no long-term contracts or hidden fees.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-white/10 bg-black/20 backdrop-blur-md rounded-xl px-4 data-[state=open]:bg-black/40 transition-colors">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white/80 transition-colors py-4 font-medium">
                            Do you support custom branding?
                        </AccordionTrigger>
                        <AccordionContent className="text-white/60 pb-4 leading-relaxed">
                            Absolutely. You can upload your logos, fonts, and color palettes. The AI will automatically apply these assets to every video it generates.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-white/10 bg-black/20 backdrop-blur-md rounded-xl px-4 data-[state=open]:bg-black/40 transition-colors">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white/80 transition-colors py-4 font-medium">
                            What platforms are supported?
                        </AccordionTrigger>
                        <AccordionContent className="text-white/60 pb-4 leading-relaxed">
                            We currently optimize for Meta (Facebook/Instagram), TikTok, YouTube Shorts, and Google Performance Max.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </motion.div>
        </div>
    );
}
