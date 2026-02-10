
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
            {/* Video Background Mock - using a high quality image as fallback/placeholder if video fails, 
          but here simulating video structure */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover opacity-60"
                    poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-cargo-ship-at-sea-4122-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl space-y-6"
                >
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                        Global Logistics Redefined
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                        Your Global Partner for <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                            Logistics & Trade
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
                        Seamlessly connecting markets with end-to-end supply chain solutions, verified product sourcing, and expert visa consultancy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold h-12 px-8 rounded-full shadow-lg shadow-emerald-900/20 group">
                            Explore Our Services
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white h-12 px-8 rounded-full backdrop-blur-sm">
                            Talk to an Expert
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
}
