"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Magnetic } from "@/components/ui/magnetic";
import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";

// Zod Schema
const forgotPasswordSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email." }),
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordValues>({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const onSubmit = async (data: ForgotPasswordValues) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Reset Request:", data);
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Shader */}
            <div className="absolute inset-0 z-0">
                <HeroSection
                    title=""
                    highlightText=""
                    description=""
                    buttonClassName="hidden"
                    colors={["#2e1065", "#7e22ce", "#be185d", "#831843", "#4c1d95", "#db2777"]} // Dark Lavender & Pink Gradient
                    speed={0.2}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md mx-auto p-4"
            >
                <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black ring-1 ring-white/5 relative overflow-hidden">
                    {/* Top Highlight Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

                    <Link href="/login" className="inline-flex items-center text-zinc-400 hover:text-white text-xs mb-6 transition-colors group relative z-10 font-medium">
                        <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Login
                    </Link>

                    <div className="text-center mb-8 relative z-10">
                        <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Reset Password</h1>
                        <p className="text-zinc-400 text-sm font-medium">
                            Enter your email and we'll send you a recovery link.
                        </p>
                    </div>

                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-center relative z-10"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-1">Check your inbox</h3>
                            <p className="text-zinc-400 text-sm mb-6">We've sent a password reset link to <span className="text-white font-medium">{`your email`}</span>.</p>

                            <Link href="/login">
                                <Button variant="outline" className="w-full border-white/10 bg-black hover:bg-zinc-900 text-white font-medium">
                                    Back to Login
                                </Button>
                            </Link>

                            <button
                                onClick={() => setIsSuccess(false)}
                                className="mt-4 text-xs text-zinc-500 hover:text-white transition-colors"
                            >
                                Didn't receive the email? Click to resend
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                            <div className="space-y-4">
                                {/* Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-zinc-300 text-xs uppercase tracking-wider font-bold">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@company.com"
                                        disabled={isSubmitting}
                                        {...register("email")}
                                        className="bg-black/50 border-white/10 text-white placeholder:text-zinc-600 focus:bg-black focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all duration-300 h-12 font-medium"
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-xs font-semibold">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="pt-2 flex justify-center">
                                <Magnetic>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-12 bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-wider text-sm transition-all shadow-lg shadow-white/5 border-0"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Link...
                                            </>
                                        ) : (
                                            "Send Recovery Link"
                                        )}
                                    </Button>
                                </Magnetic>
                            </div>
                        </form>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
