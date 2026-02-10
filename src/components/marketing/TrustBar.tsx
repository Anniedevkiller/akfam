
"use client";

import { certifications } from "@/lib/data";
import { motion } from "framer-motion";

export function TrustBar() {
    return (
        <div className="w-full bg-slate-50 border-y border-slate-100 py-8 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
                    Trusted & Certified By
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale transition-all duration-500 hover:grayscale-0">
                    {certifications.map((cert, index) => (
                        <div
                            key={cert}
                            className="text-xl md:text-2xl font-bold text-slate-700 flex items-center"
                        >
                            {/* Placeholder for actual logos - using text for now with styling */}
                            <span className="font-mono border-2 border-slate-700 px-2 py-1 rounded">
                                {cert}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
