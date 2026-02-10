
"use client";

import { motion } from "framer-motion";

export function NetworkMap() {
    return (
        <section className="py-20 overflow-hidden relative bg-slate-50">
            <div className="container mx-auto px-4 md:px-6 text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                    Global Reach, Local Expertise
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Connecting over 200 countries with our integrated logistics network.
                </p>
            </div>

            <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                {/* Abstract Map Background */}
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center opacity-10 grayscale" />

                {/* Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {/* Custom paths simulating routes */}
                    <motion.path
                        d="M 200 300 Q 400 100 800 250"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray="10 5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M 250 150 Q 500 400 850 300"
                        fill="none"
                        stroke="#0ea5e9"
                        strokeWidth="2"
                        strokeDasharray="10 5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M 800 250 Q 600 500 300 400"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        strokeDasharray="10 5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: "linear" }}
                    />
                </svg>

                {/* Nodes */}
                <div className="absolute top-[30%] left-[20%]">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute" />
                    <div className="w-3 h-3 bg-red-500 rounded-full relative" />
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-700 bg-white/80 px-1 rounded">NY</div>
                </div>
                <div className="absolute top-[40%] left-[48%]">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping absolute" />
                    <div className="w-3 h-3 bg-blue-500 rounded-full relative" />
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-700 bg-white/80 px-1 rounded">LON</div>
                </div>
                <div className="absolute top-[35%] right-[20%]">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute" />
                    <div className="w-3 h-3 bg-emerald-500 rounded-full relative" />
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-700 bg-white/80 px-1 rounded">SHA</div>
                </div>
                <div className="absolute bottom-[30%] right-[25%]">
                    <div className="w-3 h-3 bg-amber-500 rounded-full animate-ping absolute" />
                    <div className="w-3 h-3 bg-amber-500 rounded-full relative" />
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-700 bg-white/80 px-1 rounded">SYD</div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50" />
            </div>
        </section>
    );
}
