import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Background3D from "@/components/ui/Background3D";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { EasterEggListener } from "@/components/ui/easter-egg-listener";
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "AdCoach — AI Advertising Intelligence",
  description:
    "The platform that analyzes your Meta, Google, and TikTok ads in real-time and automatically generates high-converting video creatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${jakarta.variable} font-sans antialiased text-neutral-900 bg-white dark:bg-black dark:text-white transition-colors duration-500 flex flex-col min-h-screen relative overflow-x-hidden selection:bg-emerald-500/30`}
      >
        <Providers>
          <SmoothScrollProvider>
            <Background3D />
            <EasterEggListener />
            <Navbar />
            <main className="flex-grow pt-24 min-h-screen z-10 relative">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </SmoothScrollProvider>
        </Providers>
      </body>
    </html>
  );
}
