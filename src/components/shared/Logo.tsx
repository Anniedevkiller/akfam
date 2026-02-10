
import { Hexagon } from "lucide-react";

export function Logo({ className = "", collapsed = false }: { className?: string; collapsed?: boolean }) {
    return (
        <div className={`flex items-center gap-2 font-bold text-xl tracking-tight text-primary ${className}`}>
            <div className="relative flex items-center justify-center">
                <Hexagon className="h-8 w-8 text-primary fill-primary/20" strokeWidth={2.5} />
                <span className="absolute text-[10px] font-extrabold text-primary">AK</span>
            </div>
            {!collapsed && (
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Akfam<span className="text-secondary-foreground">Global</span>
                </span>
            )}
        </div>
    );
}
