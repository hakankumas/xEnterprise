"use client";

// Core
import Link from "next/link";
// Dependencies
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// Types
import { Page } from "@/types/page";

export default function Over() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["about"],
        queryFn: async () => {
            const res = await axios.get<Page>("/api/hakkimizda");
            return res.data;
        },
        staleTime: Infinity,
    });

    if (isLoading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata oluştu!</div>;
    if (!data) return null;

    return (
        <div className="relative w-full h-fit lg:h-[700px] p-4 lg:py-10 lg:px-0 lg:mb-10">
            <div className="w-full flex justify-center">
                <img
                    src={`/gallery/hakkimizda/${data.img_path}`}
                    alt={data.sub_title ?? ""}
                    className="w-full lg:w-2/3 h-96 lg:h-120 object-cover"
                    loading="lazy"
                />
            </div>
            <div className="-translate-y-15 lg:translate-y-0 mx-5 lg:mx-0 lg:absolute lg:bottom-0 lg:right-5 flex flex-col gap-2 justify-center items-center lg:items-start bg-white text-black p-5 lg:px-7 h-fit w-fit lg:w-150 rounded-2xl shadow-2xl">
                <p className="text-3xl">{data.title}</p>
                <h1 className="text-xl">{data.sub_title}</h1>
                <p className="text-justify">{data.label}</p>
                <Link
                    href="/hakkimizda"
                    className="text-sm text-center text-gray-400 hover:text-black cursor-pointer"
                >
                    Tümünü Gör
                </Link>
            </div>
        </div>
    );
}
