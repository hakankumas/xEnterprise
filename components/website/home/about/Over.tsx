"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Page } from "@/types/page";
import Link from "next/link";

export default function Over() {
    const [about, setAbout] = useState<Page | null>(null);
    const getAbout = async () => {
        try {
            const { data } = await axios.get<Page>("/api/website/about");
            setAbout(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAbout();
    }, []);

    if (!about) return null;
    return (
        <div className="relative w-full h-fit lg:h-[700px] p-4 lg:py-10 lg:px-0 lg:mb-10">
            <div className="w-full flex justify-center">
                <img
                    src={`/hakkimizda/${about.img_path}`}
                    alt={about.title ?? ""}
                    className="w-full lg:w-2/3 h-96 lg:h-120 object-cover"
                    loading="lazy"
                />
            </div>
            <div className="-translate-y-15 lg:translate-y-0 mx-5 lg:mx-0 lg:absolute lg:bottom-0 lg:right-5 flex flex-col gap-2 justify-center items-center lg:items-start bg-white text-black p-5 lg:px-7 h-fit w-fit lg:w-150 rounded-2xl shadow-2xl">
                <p className="text-3xl">{about.title}</p>
                <h1 className="text-xl">{about.sub_title}</h1>
                <p className="text-justify">{about.label}</p>
                <Link
                    href="/hakkimizda"
                    className="text-sm text-center text-gray-400 hover:text-blue-600 cursor-pointer"
                >
                    Tümünü Gör
                </Link>
            </div>
        </div>
    );
}
