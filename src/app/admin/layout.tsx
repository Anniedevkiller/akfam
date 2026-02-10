
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <AdminSidebar />
            <SidebarInset className="bg-slate-100/50 min-h-screen">
                <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-sidebar-border bg-background px-6 shadow-sm">
                    <SidebarTrigger />
                    <h1 className="font-semibold text-lg">Dashboard</h1>
                </header>
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
