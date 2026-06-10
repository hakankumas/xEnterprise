"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import ContactBtn from "./ContactBtn";
import Breadcrumb from "./Breadcrumb";

interface LayoutContentProps {
    children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
    const pathname = usePathname();

    return (
        <div className="container mx-auto bg-black">
            <Header />
            {pathname !== "/" && <Breadcrumb />}
            <ContactBtn />
            <div className="min-h-screen">{children}</div>
            <Footer />
        </div>
    );
}
