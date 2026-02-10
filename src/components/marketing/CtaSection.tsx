
import { Button } from "@/components/ui/button";

export function CtaSection() {
    return (
        <section className="py-24 bg-slate-900 border-t border-slate-800 text-center relative overflow-hidden">
            {/* Background texture/glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                    Let’s Move Your Business Forward.
                </h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                    Join thousands of businesses streamlining their global logistics and trade operations with Akfam.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="h-14 px-8 text-lg bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-900/30">
                        Get a Freight Quote
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full">
                        Talk to an Expert
                    </Button>
                </div>
            </div>
        </section>
    );
}
