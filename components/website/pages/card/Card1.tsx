"use client";

// Core
import Link from "next/link";
// Components
import Breadcrumb from "../../Breadcrumb";
// Dependencies
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// Types
import { Page_Children } from "@/types/relations/page_children";

export default function Card1() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const res = await axios.get<Page_Children>("/api/hizmetlerimiz");
            return res.data;
        },
        staleTime: Infinity,
    });

    if (isLoading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata oluştu!</div>;
    if (!data) return null;

    return (
        <>
            <Breadcrumb page_name={data.title} href_link={`/${data.slug}`} />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-5 lg:px-0 lg:py-10">
                {data.children.map((child) => (
                    <div
                        key={child.id}
                        className="bg-gray-900 text-white border border-gray-700"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={`/gallery/hizmetlerimiz/${child.img_path}`}
                                alt={child.title}
                                className="w-full h-64 object-cover hover:scale-105 transition-all duration-300"
                            />
                        </div>
                        <div className="p-5">
                            <p className="font-bold text-justify text-lg line-clamp-3 lg:line-clamp-2">
                                {child.title}
                            </p>
                            <p className="text-justify my-3 line-clamp-5">
                                {child.label}
                            </p>
                            <Link
                                href={`/hizmetlerimiz/${child.slug}`}
                                className="text-sm text-gray-400 hover:text-white cursor-pointer"
                            >
                                Tümünü Gör
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
