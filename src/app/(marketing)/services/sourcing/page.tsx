
"use client";

import { MarketingHeader } from "@/components/marketing/Header";
import { MarketingFooter } from "@/components/marketing/Footer";
import { Globe, CheckCircle, Search, FileSignature } from "lucide-react";

export default function SourcingPage() {
    return (
        <div className="min-h-screen flex flex-col pt-20">
            <MarketingHeader />
            <main className="flex-1">
                <section className="bg-emerald-50/50 py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Services</span>
                            <h1 className="text-4xl font-bold mt-2 mb-6 tracking-tight">Verified Product Sourcing</h1>
                            <p className="text-lg text-muted-foreground">
                                Leverage our global network of vetted suppliers to find the right products at the right price, with quality guaranteed.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                { title: "Supplier Discovery", icon: Search, text: "Database of 5,000+ audited manufacturers across 20+ industries." },
                                { title: "Quality Assurance", icon: CheckCircle, text: "On-site inspections and lab testing to ensure compliance with specifications." },
                                { title: "Contract Negotiation", icon: FileSignature, text: "Legal and commercial support to secure favorable terms and pricing." },
                                { title: "Global Procurement", icon: Globe, text: "End-to-end management of the purchasing lifecycle from RFQ to delivery." },
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-6 p-8 bg-white border rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-emerald-100 p-4 rounded-2xl h-fit">
                                        <feature.icon className="h-8 w-8 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{feature.text}</p>
                                    </div>
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
