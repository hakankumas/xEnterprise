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
            {/* <Link href="/">
                <img
                    src="/logo.png"
                    alt="Hakan KUMAŞ - Logo"
                    className="w-28 h-28 mx-auto"
                />
            </Link> */}
            <div className="h-full px-4">
                {/* Mobile Button */}
                <div className="lg:hidden flex flex-row justify-between items-center w-full py-3">
                    <Link href="/">
                        <img
                            src="/logo.png"
                            alt="Hakan KUMAŞ - Logo"
                            className="w-24 h-24"
                        />
                    </Link>
                    <button
                        onClick={() => setOpen(!open)}
                        className={
                            open
                                ? "text-2xl text-gray-400 transition-colors duration-300"
                                : "text-2xl hover:transition-colors duration-300"
                        }
                    >
                        ☰
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-6 w-full items-center justify-between lg:py-3">
                    <div>
                        <Link href="/">
                            <img
                                src="/logo.png"
                                alt="Hakan KUMAŞ - Logo"
                                className="w-28 h-28 mx-auto"
                            />
                        </Link>
                    </div>
                    <div className="flex gap-6">
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
