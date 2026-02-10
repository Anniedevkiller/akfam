
"use client";

import { MarketingHeader } from "@/components/marketing/Header";
import { MarketingFooter } from "@/components/marketing/Footer";
import { FileText, ShieldAlert, BadgeCheck, Scale } from "lucide-react";

export default function CompliancePage() {
    return (
        <div className="min-h-screen flex flex-col pt-20">
            <MarketingHeader />
            <main className="flex-1">
                <section className="bg-slate-900 text-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mb-16">
                            <h1 className="text-4xl font-bold mb-6 tracking-tight">Trade Compliance & Risk Management</h1>
                            <p className="text-lg text-slate-400">
                                Navigate the complexity of international regulations with our expert consulting and automated compliance framework.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Regulatory Consulting", icon: Scale, text: "Staying ahead of changing tariffs, sanctions, and trade agreements." },
                                { title: "Audit Readiness", icon: BadgeCheck, text: "Internal controls and documentation to ensure you pass any customs audit." },
                                { title: "HS Code Classification", icon: FileText, text: "Precise product classification to minimize duties and avoid penalties." },
                                { title: "Sanctions Screening", icon: ShieldAlert, text: "Real-time verification of partners against global restricted party lists." },
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col p-8 bg-slate-800 border border-slate-700 rounded-2xl">
                                    <feature.icon className="h-10 w-10 text-emerald-400 mb-6" />
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{feature.text}</p>
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
