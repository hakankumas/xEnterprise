"use client";

import Link from "next/link";
import { useState } from "react";
import {
    MdOutlineInsertLink,
    MdKeyboardDoubleArrowUp,
    MdKeyboardDoubleArrowDown,
    MdBackupTable,
    MdCall,
} from "react-icons/md";
import { TfiLayoutSlider, TfiPencilAlt } from "react-icons/tfi";

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    return (
        <div
            className={`flex flex-col items-center gap-10 h-screen bg-gray-900 transition-all duration-300 ${
                open ? "w-50 lg:w-75" : "w-18"
            }`}
        >
            <div
                className={`${
                    open ? "justify-between" : "justify-center"
                } flex flex-row items-center w-full p-5`}
            >
                {open && (
                    <Link href="/panel">
                        <img src="/logo.png" className="w-12 h-12" />
                    </Link>
                )}

                <button
                    onClick={() => setOpen(!open)}
                    className={`text-2xl transition-all duration-1000 ${
                        open ? "opacity-50" : "opacity-100"
                    }`}
                >
                    ☰
                </button>
            </div>

            <div className="flex flex-col text-lg w-full">
                <Link
                    href="/"
                    className="text-green-400 hover:text-green-600 hover:bg-gray-950 hover:rounded p-3 transition-colors duration-300 flex items-center gap-4"
                    target="_blank"
                >
                    <MdOutlineInsertLink />
                    {open && (
                        <>
                            <span className="text-2xl font-bold">Website</span>
                        </>
                    )}
                </Link>
                <Link
                    href="/panel/tasarim"
                    className="text-white hover:text-gray-400 hover:bg-gray-950 hover:rounded p-3 transition-colors duration-300 flex items-center gap-4"
                >
                    <TfiPencilAlt />
                    {open && "Tasarım"}
                </Link>
                <Link
                    href="/panel/menuler/header"
                    className="text-white hover:text-gray-400 hover:bg-gray-950 hover:rounded p-3 transition-colors duration-300 flex items-center gap-4"
                >
                    <MdKeyboardDoubleArrowUp />
                    {open && "Header Menü"}
                </Link>
                <Link
                    href="/panel/menuler/footer"
                    className="text-white hover:text-gray-400 hover:bg-gray-950 hover:rounded p-3 transition-colors duration-300 flex items-center gap-4"
                >
                    <MdKeyboardDoubleArrowDown />
                    {open && "Footer Menü"}
                </Link>
                <Link
                    href="/panel/slider"
                    className="text-white hover:text-gray-400 hover:bg-gray-950 hover:rounded p-3 transition-colors duration-300 flex items-center gap-4"
                >
                    <TfiLayoutSlider />
                    {open && "Slider"}
                </Link>
                <Link
                    href="/panel/sayfalar"
                    className="text-white hover:text-gray-400 hover:bg-gray-950 hover:rounded p-3 transition-colors duration-300 flex items-center gap-4"
                >
                    <MdBackupTable />
                    {open && "Sayfalar"}
                </Link>
                <Link
                    href="/panel/iletisim"
                    className="text-white hover:text-gray-400 hover:bg-gray-950 hover:rounded p-3 transition-colors duration-300 flex items-center gap-4"
                >
                    <MdCall />
                    {open && "İletişim"}
                </Link>
            </div>
        </div>
    );
}
