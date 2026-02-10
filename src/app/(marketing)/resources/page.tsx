
"use client";

import { MarketingHeader } from "@/components/marketing/Header";
import { MarketingFooter } from "@/components/marketing/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Globe, Lightbulb } from "lucide-react";

export default function ResourcesPage() {
    const resources = [
        { title: "Trade Guides", icon: Globe, description: "Compliance requirements for over 50 countries." },
        { title: "Case Studies", icon: Lightbulb, description: "How we saved our clients millions in duties." },
        { title: "Sourcing Templates", icon: FileText, description: "RFP and contract templates for overseas suppliers." },
        { title: "Learning Center", icon: BookOpen, description: "Webinars and articles on global supply chains." },
    ];

    return (
        <div className="min-h-screen flex flex-col pt-20">
            <MarketingHeader />
            <main className="flex-1">
                <section className="bg-slate-50 py-16 border-b">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">Resources</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Tools, guides, and insights to help you navigate the complexities of global trade.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {resources.map((res, i) => (
                                <Card key={i} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <res.icon className="h-10 w-10 text-primary mb-2" />
                                        <CardTitle>{res.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{res.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <MarketingFooter />
        </div>
    );
}
