
"use client";

import { MarketingHeader } from "@/components/marketing/Header";
import { MarketingFooter } from "@/components/marketing/Footer";
import { ShieldCheck, UserCircle, Plane, CreditCard } from "lucide-react";

export default function VisaPage() {
    return (
        <div className="min-h-screen flex flex-col pt-20">
            <MarketingHeader />
            <main className="flex-1">
                <section className="bg-slate-50 py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h1 className="text-4xl font-bold mb-6 tracking-tight">Visa & Corporate Immigration</h1>
                            <p className="text-lg text-muted-foreground">
                                Expert guidance for business visas, work permits, and residency strategies to keep your global team moving.
                            </p>
                        </div>

                        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
                            <div className="space-y-4 text-center">
                                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                    <UserCircle className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Business Visas</h3>
                                <p className="text-muted-foreground text-sm">Rapid processing for short-term technical and commercial travel.</p>
                            </div>
                            <div className="space-y-4 text-center">
                                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                    <ShieldCheck className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Work Permits</h3>
                                <p className="text-muted-foreground text-sm">Long-term immigration support for expatriate staff and their families.</p>
                            </div>
                            <div className="space-y-4 text-center">
                                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Plane className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Residency Setup</h3>
                                <p className="text-muted-foreground text-sm">Navigating complex legal paths for permanent establishment overseas.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <MarketingFooter />
        </div>
    );
}
