
"use client";

import { industries } from "@/lib/data";

export function IndustriesSection() {
    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Industries We Serve
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Specialized handling and expertise for the world&apos;s most demanding sectors.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {industries.map((item) => (
                        <div
                            key={item.name}
                            className="flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/30 transition-all cursor-pointer group"
                        >
                            <span className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 filter drop-shadow-lg">
                                {item.icon}
                            </span>
                            <h3 className="font-semibold text-center group-hover:text-emerald-400 transition-colors">
                                {item.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
