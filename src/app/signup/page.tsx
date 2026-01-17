"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Magnetic } from "@/components/ui/magnetic";
import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";

// Zod Schema
const SUSPICIOUS_DOMAINS = [
    "tempmail.com", "10minutemail.com", "guerrillamail.com", "sharklasers.com",
    "yopmail.com", "throwawaymail.com", "mailinator.com", "getairmail.com",
    "dispostable.com"
];

const signupSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }).refine((email) => {
        const domain = email.split("@")[1]?.toLowerCase();
        if (!domain) return false;

        // Block only known disposable/suspicious domains
        if (SUSPICIOUS_DOMAINS.includes(domain)) return false;

        return true;
    }, { message: "Please use a valid, permanent email address." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

type SignupValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupValues>({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = async (data: SignupValues) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Signup Data:", data);
        setIsSubmitting(false);
        // Redirect to dashboard or home (simulated)
        router.push("/");
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

                    <div className="text-center mb-8 relative z-10">
                        <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Create Account</h1>
                        <p className="text-zinc-400 text-sm font-medium">
                            Join thousands of marketers scaling with AdCoach.
                        </p>
                    </div>

                    <div className="relative z-10 mb-6">
                        <Button
                            type="button"
                            onClick={() => signIn("google")}
                            className="w-full h-12 bg-white text-black hover:bg-zinc-200 font-bold tracking-wide text-sm transition-all shadow-lg flex items-center justify-center gap-3"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.2z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                            Continue with Google
                        </Button>

                        <div className="relative flex py-6 items-center">
                            <div className="flex-grow border-t border-white/10"></div>
                            <span className="flex-shrink-0 mx-4 text-zinc-500 text-xs uppercase tracking-widest font-bold">Or</span>
                            <div className="flex-grow border-t border-white/10"></div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                        <div className="space-y-4">
                            {/* Name */}
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-zinc-300 text-xs uppercase tracking-wider font-bold">Full Name</Label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    disabled={isSubmitting}
                                    {...register("name")}
                                    className="bg-black/50 border-white/10 text-white placeholder:text-zinc-600 focus:bg-black focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all duration-300 h-12 font-medium"
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-xs font-semibold">{errors.name.message}</p>
                                )}
                            </div>

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

                            {/* Password */}
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-zinc-300 text-xs uppercase tracking-wider font-bold">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    disabled={isSubmitting}
                                    {...register("password")}
                                    className="bg-black/50 border-white/10 text-white placeholder:text-zinc-600 focus:bg-black focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all duration-300 h-12 font-medium"
                                />
                                {errors.password && (
                                    <p className="text-red-400 text-xs font-semibold">{errors.password.message}</p>
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
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating Account...
                                        </>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Get Started <ArrowRight className="w-4 h-4" />
                                        </span>
                                    )}
                                </Button>
                            </Magnetic>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-white/40 text-xs">
                            Already have an account?{" "}
                            <Link href="/login" className="text-white hover:underline">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
