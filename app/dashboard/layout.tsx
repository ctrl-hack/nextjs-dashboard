import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <SideNav />
            <div className="flex-1 overflow-y-auto p-6">{children}</div>
        </div>
    )
}