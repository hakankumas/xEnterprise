"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderTop from "./HeaderTop";
import { menuItems } from "@/variables/MenuItems";
import { MdPlayArrow } from "react-icons/md";

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const linkClass = (href: string) =>
        pathname === href
            ? "text-gray-400 flex items-center gap-2"
            : "hover:text-gray-300 transition-colors duration-300 flex items-center gap-2";

    return (
        <div className="sticky top-0 left-0 w-full z-50 bg-gray-800 text-white">
            <HeaderTop />
            <div className="h-16 flex items-center justify-between px-4 lg:justify-center">
                {/* Mobile Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setOpen(!open)}
                        className={
                            open
                                ? "text-gray-400 transition-colors duration-300"
                                : "hover:transition-colors duration-300"
                        }
                    >
                        ☰
                    </button>
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
                <div className="absolute top-full left-0 w-full h-screen p-5 bg-gray-900 flex flex-col gap-4 lg:hidden z-50 shadow-lg">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={linkClass(item.href)}
                            onClick={() => setOpen(false)}
                        >
                            <MdPlayArrow />
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
