
"use client";

import { MarketingHeader } from "@/components/marketing/Header";
import { MarketingFooter } from "@/components/marketing/Footer";
import { Truck, Shield, Clock, BarChart } from "lucide-react";

export default function LogisticsPage() {
    return (
        <div className="min-h-screen flex flex-col pt-20">
            <MarketingHeader />
            <main className="flex-1">
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Services</span>
                            <h1 className="text-4xl font-bold mt-2 mb-6 tracking-tight">Global Logistics & Warehousing</h1>
                            <p className="text-lg text-muted-foreground">
                                Precision-engineered supply chain solutions designed for speed, security, and visibility across every mode of transport.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Ocean Freight", icon: Truck, text: "FCL and LCL services with guaranteed space across major global lanes." },
                                { title: "Air Cargo", icon: Clock, text: "Next-flight-out capabilities for time-sensitive high-value shipments." },
                                { title: "Warehousing", icon: Shield, text: "Climate-controlled, secure storage with smart inventory management." },
                                { title: "Customs Brokering", icon: BarChart, text: "Expert clearance services to avoid delays and optimize duties." },
                            ].map((feature, i) => (
                                <div key={i} className="p-6 border rounded-2xl hover:border-primary/50 transition-colors">
                                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <MarketingFooter />
        </div>
    );
}
