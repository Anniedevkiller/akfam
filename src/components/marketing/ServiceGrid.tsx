
"use client";

import { services } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export function ServiceGrid() {
    return (
        <section className="py-20 md:py-32 bg-white" id="services">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                            Comprehensive Trade Solutions
                        </h2>
                        <p className="text-lg text-slate-600">
                            We integrate logistics, sourcing, and compliance into a single, seamless platform.
                        </p>
                    </div>
                    <Link href="/services" className="text-emerald-600 font-semibold flex items-center hover:underline">
                        View all services <MoveRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-emerald-500/50 overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <CardHeader>
                                    <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-emerald-600 group-hover:text-white transition-colors mb-4">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-emerald-700 transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                    <div className="mt-6 flex items-center text-emerald-600 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                                        Learn more <MoveRight className="ml-2 h-4 w-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
