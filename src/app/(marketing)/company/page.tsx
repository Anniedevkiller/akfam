
"use client";

import { MarketingHeader } from "@/components/marketing/Header";
import { MarketingFooter } from "@/components/marketing/Footer";

export default function CompanyPage() {
    return (
        <div className="min-h-screen flex flex-col pt-20">
            <MarketingHeader />
            <main className="flex-1">
                <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-5xl font-extrabold mb-6">About Akfam</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                            A global trade partner committed to radical transparency, operational excellence, and technological innovation.
                        </p>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-700" />
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    At Akfam, we believe that global trade should be accessible to businesses of all sizes. By combining deep domain expertise in logistics, sourcing, and immigration with cutting-edge software, we remove the barriers that prevent companies from scaling internationally.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Whether you're a startup looking for your first supplier in Asia or a multinational enterprise optimizing complex supply chains, we provide the platform to make it happen effortlessly.
                                </p>
                            </div>
                            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-muted">
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground italic">
                                    Company Image Placeholder
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <MarketingFooter />
        </div>
    );
}
