"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/panel/Sidebar";
import TanstackProvider from "@/components/website/TanstackProvider";
import { Toaster } from "react-hot-toast";
interface PanelLayoutProps {
    children: React.ReactNode;
}

export default function PanelLayout({ children }: PanelLayoutProps) {
    const pathname = usePathname();
    return (
        <html lang="tr">
            <body className="min-h-full flex flex-col">
                <div className="flex flex-row">
                    {pathname !== "/panel/login" && <Sidebar />}
                    <TanstackProvider>
                        {children}
                        <Toaster />
                    </TanstackProvider>
                </div>
            </body>
        </html>
    );
}
