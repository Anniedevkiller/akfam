
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    LayoutDashboard,
    Package,
    Users,
    FileText,
    MessageSquare,
    Settings,
    BookOpen,
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
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/shared/Logo";

const mainItems = [
    { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
    { title: "Shipments", url: "/admin/shipments", icon: Package },
    { title: "Users", url: "/admin/users", icon: Users },
    { title: "Quotes", url: "/admin/quotes", icon: FileText },
];

const contentItems = [
    { title: "Blog Posts", url: "/admin/blog", icon: BookOpen },
    { title: "Support Tickets", url: "/admin/support", icon: MessageSquare },
];

export function AdminSidebar() {
    const pathname = usePathname();

    return (
        <Sidebar collapsible="icon" className="border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
            <SidebarHeader className="h-16 flex items-center justify-center border-b border-sidebar-border">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary group-data-[collapsible=icon]:hidden">
                    <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        Akfam<span className="text-muted-foreground">Admin</span>
                    </span>
                </div>
                <Hexagon className="h-8 w-8 text-primary hidden group-data-[collapsible=icon]:block" />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Management</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {mainItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        active={pathname === item.url}
                                        tooltip={item.title}
                                    >
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Content</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {contentItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        active={pathname === item.url}
                                        tooltip={item.title}
                                    >
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>System</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="Settings">
                                    <Link href="/admin/settings">
                                        <Settings />
                                        <span>Settings</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="p-4 border-t border-sidebar-border">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="hover:bg-red-900/10 hover:text-red-600">
                            <LogOut />
                            <span>Log Out</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
