
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    LayoutDashboard,
    Package,
    MapPin,
    FileText,
    MessageSquare,
    User,
    Settings,
    LogOut,
    Hexagon
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/shared/Logo";

const items = [
    { title: "Dashboard", url: "/portal", icon: LayoutDashboard },
    { title: "My Shipments", url: "/portal/shipments", icon: Package },
    { title: "Track Shipment", url: "/portal/track", icon: MapPin },
    { title: "Quote Requests", url: "/portal/quotes", icon: FileText },
    { title: "Support", url: "/portal/support", icon: MessageSquare },
];

export function PortalSidebar() {
    const pathname = usePathname();

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="h-16 flex items-center justify-center border-b border-sidebar-border">
                <Logo collapsed={false} className="group-data-[collapsible=icon]:hidden" />
                <Hexagon className="h-8 w-8 text-primary hidden group-data-[collapsible=icon]:block" />
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu className="p-2">
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                isActive={pathname === item.url}
                                tooltip={item.title}
                                className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                            >
                                <Link href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
                <SidebarSeparator className="my-2" />
                <SidebarMenu className="p-2">
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild tooltip="Profile">
                            <Link href="/portal/profile">
                                <User />
                                <span>Profile</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild tooltip="Settings">
                            <Link href="/portal/settings">
                                <Settings />
                                <span>Settings</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="p-4 border-t border-sidebar-border">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="hover:bg-red-50 hover:text-red-600">
                            <LogOut />
                            <span>Log Out</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
