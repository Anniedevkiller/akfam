
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/shared/Logo";

const services = [
    {
        title: "Global Logistics",
        href: "/services/logistics",
        description: "End-to-end freight forwarding, warehousing, and distribution.",
    },
    {
        title: "Sourcing Solutions",
        href: "/services/sourcing",
        description: "Verified supplier network and quality verification services.",
    },
    {
        title: "Visa & Immigration",
        href: "/services/visa",
        description: "Corporate immigration, work permits, and business travel.",
    },
    {
        title: "Trade Compliance",
        href: "/services/compliance",
        description: "Regulatory consulting, customs clearance, and risk management.",
    },
];

export function MarketingHeader() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-background/95 backdrop-blur-md border-border shadow-sm py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-foreground">Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {services.map((service) => (
                                            <ListItem
                                                key={service.title}
                                                title={service.title}
                                                href={service.href}
                                            >
                                                {service.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/resources" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-foreground/80 hover:text-foreground")}>
                                        Resources
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/company" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-foreground/80 hover:text-foreground")}>
                                        Company
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="hidden xl:flex text-muted-foreground gap-2">
                        <Globe className="h-4 w-4" />
                        <span>Global (EN)</span>
                    </Button>
                    <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                        Track Shipment
                    </Button>
                    <Link href="/portal">
                        <Button>Client Portal</Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col gap-6 mt-6">
                                <Link href="/" className="flex items-center gap-2 mb-4">
                                    <Logo />
                                </Link>
                                <nav className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Services</h4>
                                        {services.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="py-2 text-base font-medium hover:text-primary transition-colors"
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="h-px bg-border my-2" />
                                    <Link href="/resources" className="text-base font-medium hover:text-primary">Resources</Link>
                                    <Link href="/company" className="text-base font-medium hover:text-primary">Company</Link>
                                    <div className="h-px bg-border my-2" />
                                    <Link href="/portal/track" className="text-base font-medium hover:text-primary">Track Shipment</Link>
                                    <Link href="/portal">
                                        <Button className="w-full mt-2">Client Portal</Button>
                                    </Link>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
