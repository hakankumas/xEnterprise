"use client";

import Link from "next/link";
import { useState } from "react";
import {
    MdOutlineInsertLink,
    MdKeyboardDoubleArrowUp,
    MdKeyboardDoubleArrowDown,
    MdBackupTable,
    MdCall,
    MdMenu,
} from "react-icons/md";
import { TfiLayoutSlider, TfiPencilAlt } from "react-icons/tfi";

export default function Sidebar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [desktopMenu, setDesktopMenu] = useState(true);
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
                    <Link
                        href="/"
                        className="flex flex-row gap-4 items-center text-green-500 animate-pulse"
                        target="_blank"
                    >
                        <MdOutlineInsertLink />
                        {mobileMenu && <span>Website</span>}
                    </Link>

                    <Link
                        href="/panel/tasarim"
                        onClick={() => setMobileMenu(false)}
                        className="flex flex-row gap-4 items-center"
                    >
                        <TfiPencilAlt />
                        {mobileMenu && <span>Tasarım</span>}
                    </Link>

                    <Link
                        href="/panel/menu-header"
                        onClick={() => setMobileMenu(false)}
                        className="flex flex-row gap-4 items-center"
                    >
                        <MdKeyboardDoubleArrowUp />
                        {mobileMenu && <span>Header Menü</span>}
                    </Link>

                    <Link
                        href="/panel/menu-footer"
                        onClick={() => setMobileMenu(false)}
                        className="flex flex-row gap-4 items-center"
                    >
                        <MdKeyboardDoubleArrowDown />
                        {mobileMenu && <span>Footer Menü</span>}
                    </Link>

                    <Link
                        href="/panel/slider"
                        onClick={() => setMobileMenu(false)}
                        className="flex flex-row gap-4 items-center"
                    >
                        <TfiLayoutSlider />
                        {mobileMenu && <span>Slider</span>}
                    </Link>

                    <Link
                        href="/panel/sayfalar"
                        onClick={() => setMobileMenu(false)}
                        className="flex flex-row gap-4 items-center"
                    >
                        <MdBackupTable />
                        {mobileMenu && <span>Sayfalar</span>}
                    </Link>

                    <Link
                        href="/panel/iletisim"
                        onClick={() => setMobileMenu(false)}
                        className="flex flex-row gap-4 items-center"
                    >
                        <MdCall />
                        {mobileMenu && <span>İletişim</span>}
                    </Link>
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
                        } text-2xl transition-colors duration-500`}
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
                    {/* Sayfalar */}
                    <Link
                        href="/panel/sayfalar"
                        className="flex flex-row gap-4 items-center"
                    >
                        <MdBackupTable />
                        {desktopMenu && <span>Sayfalar</span>}
                    </Link>

                    {/* Header */}
                    <Link
                        href="/panel/menu-header"
                        className="flex flex-row gap-4 items-center"
                    >
                        <MdKeyboardDoubleArrowUp />
                        {desktopMenu && <span>Header Menü</span>}
                    </Link>

                    {/* Footer */}
                    <Link
                        href="/panel/menu-footer"
                        className="flex flex-row gap-4 items-center"
                    >
                        <MdKeyboardDoubleArrowDown />
                        {desktopMenu && <span>Footer Menü</span>}
                    </Link>

                    {/* Slider */}
                    <Link
                        href="/panel/slider"
                        className="flex flex-row gap-4 items-center"
                    >
                        <TfiLayoutSlider />
                        {desktopMenu && <span>Slider</span>}
                    </Link>

                    {/* Tasarım */}
                    <Link
                        href="/panel/tasarim"
                        className="flex flex-row gap-4 items-center"
                    >
                        <TfiPencilAlt />
                        {desktopMenu && <span>Tasarım</span>}
                    </Link>

                    {/* İletişim */}
                    <Link
                        href="/panel/iletisim"
                        className="flex flex-row gap-4 items-center"
                    >
                        <MdCall />
                        {desktopMenu && <span>İletişim</span>}
                    </Link>

                    {/* Website */}
                    <Link
                        href="/"
                        className="flex flex-row gap-4 items-center text-green-500 animate-pulse"
                        target="_blank"
                    >
                        <MdOutlineInsertLink />
                        {desktopMenu && <span>Website</span>}
                    </Link>
                </div>
            </div>
        </div>
    );
}
