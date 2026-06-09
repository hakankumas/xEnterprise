"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/about", label: "Hakkımızda" },
    { href: "/services", label: "Hizmetlerimiz" },
    { href: "/projects", label: "Projelerimiz" },
    { href: "/partners", label: "İş Ortaklarımız" },
    { href: "/references", label: "Referanslarımız" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "İletişim" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const linkClass = (href: string) =>
        pathname === href ? "text-gray-400" : "hover:text-gray-300";

    return (
        <div className="bg-gray-800 text-white">
            <div className="h-16 flex items-center justify-between px-4 lg:justify-center">
                {/* Mobile Button */}
                <div className="lg:hidden">
                    <button onClick={() => setOpen(!open)}>☰</button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={linkClass(item.href)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="flex flex-col gap-4 ps-4 pb-4 lg:hidden">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={linkClass(item.href)}
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
