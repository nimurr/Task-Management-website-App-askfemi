"use client";

import { useState } from "react";
import "./../../globals.css";
import DashboardSidebar from "@/Components/Common/DashboardSidebar";
import DashboardHeader from "@/Components/Common/DashboardHeader";
 

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden relative">

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                fixed lg:static z-50
                h-full
                transition-transform duration-300
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                lg:translate-x-0
            `}
            >
                <DashboardSidebar />
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 w-full">
                <DashboardHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

                <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 bg-gray-50">
                    {children}
                </div>
            </div>
        </div>
    );
}