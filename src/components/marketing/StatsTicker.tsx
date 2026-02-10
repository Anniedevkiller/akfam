
"use client";

import { motion } from "framer-motion";
import { Package, CheckCircle, Truck } from "lucide-react";

const events = [
    { id: 1, text: "Shipment #TRK-881 cleared customs in Dubai", icon: CheckCircle, color: "text-emerald-500" },
    { id: 2, text: "New freight route opened: Shanghai -> Rotterdam", icon: Truck, color: "text-blue-500" },
    { id: 3, text: "Wait times at LA Port reduced by 15%", icon: Package, color: "text-amber-500" },
    { id: 4, text: "Client 'TechFlow' saved 20% on sourcing costs", icon: CheckCircle, color: "text-emerald-500" },
    { id: 5, text: "Air Freight capacity increased for Holiday Season", icon: Truck, color: "text-blue-500" },
];

export function StatsTicker() {
    return (
        <div className="w-full bg-slate-900 border-t border-slate-800 py-3 overflow-hidden flex items-center">
            <div className="container mx-auto px-4 flex items-center">
                <div className="flex bg-slate-800 px-3 py-1 rounded text-xs font-bold text-emerald-400 mr-4 whitespace-nowrap uppercase tracking-wider">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2 my-auto"></span>
                    Live Updates
                </div>
                <div className="flex-1 overflow-hidden relative h-6 mask-gradient">
                    <motion.div
                        className="flex gap-12 absolute whitespace-nowrap"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    >
                        {[...events, ...events, ...events].map((event, i) => (
                            <div key={`${event.id}-${i}`} className="flex items-center gap-2 text-sm text-slate-300">
                                <event.icon className={`h-4 w-4 ${event.color}`} />
                                <span>{event.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
