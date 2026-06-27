"use client";

import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { menuItemsPanel } from "@/variables/MenuItemsPanel";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [desktopMenu, setDesktopMenu] = useState(true);
    const pathname = usePathname();
    return (
        <div>
            {/* Mobile Menu */}
            <div
                className={`${
                    mobileMenu ? "absolute z-50 w-full" : "w-fit"
                } flex flex-col lg:hidden px-5 gap-10 min-h-screen h-full bg-gray-900`}
            >
                {/* Logo ve Menü Butonu */}
                <div
                    className={`${
                        mobileMenu ? "w-full" : "w-fit"
                    } flex flex-row justify-between items-center h-20`}
                >
                    {mobileMenu && (
                        <Link
                            href="/panel"
                            className="w-12 h-12"
                            onClick={() => setMobileMenu(false)}
                        >
                            <img src="/logo.png" />
                        </Link>
                    )}
                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className={`${
                            mobileMenu ? "text-white" : "text-gray-400"
                        } text-2xl transition-colors duration-500`}
                    >
                        <MdMenu className="text-3xl" />
                    </button>
                </div>

                {/* Linkler */}
                <div
                    className={`flex flex-col text-xl ${
                        !mobileMenu ? "items-center gap-10" : "gap-6"
                    }`}
                >
                    {menuItemsPanel.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setMobileMenu(false)}
                                className={`${
                                    pathname === item.href && "text-gray-400"
                                } ${
                                    item?.className
                                } flex flex-row gap-4 items-center`}
                                target={item?.target}
                            >
                                <Icon />
                                {mobileMenu && <span>{item.label}</span>}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Desktop Menu */}
            <div
                className={`${
                    desktopMenu ? "w-70" : "w-fit"
                } hidden lg:flex flex-col px-5 gap-10 min-h-screen h-full bg-gray-900`}
            >
                {/* Logo ve Menü Butonu */}
                <div
                    className={`${
                        desktopMenu ? "w-full" : "w-fit"
                    } flex flex-row justify-between items-center h-20`}
                >
                    {desktopMenu && (
                        <Link href="/panel" className="w-12 h-12">
                            <img src="/logo.png" />
                        </Link>
                    )}
                    <button
                        onClick={() => setDesktopMenu(!desktopMenu)}
                        className={`${
                            desktopMenu ? "text-white" : "text-gray-400"
                        } text-2xl transition-colors duration-500 cursor-pointer`}
                    >
                        <MdMenu className="text-3xl" />
                    </button>
                </div>

                {/* Linkler */}
                <div
                    className={`flex flex-col text-lg ${
                        !desktopMenu ? "items-center gap-10" : "gap-6"
                    }`}
                >
                    {menuItemsPanel.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={`${
                                    pathname === item.href && "text-gray-400"
                                } ${
                                    item?.className
                                } flex flex-row gap-4 items-center`}
                                target={item?.target}
                            >
                                <Icon />
                                {desktopMenu && <span>{item.label}</span>}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
