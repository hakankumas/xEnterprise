"use client";

// Core
import Link from "next/link";
// Dependencies
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// Types
import { Page_PageGallery } from "@/types/relations/page_pageGallery";

export default function Gallery1({ pageKey }: { pageKey: string }) {
    const { data, isLoading, error } = useQuery({
        queryKey: [pageKey],
        queryFn: async () => {
            const res = await axios.get<Page_PageGallery>(
                `/api/website/${pageKey}`
            );
            return res.data;
        },
        staleTime: Infinity,
    });

    if (isLoading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata oluştu!</div>;
    if (!data) return null;

    return (
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 p-5 lg:px-0 lg:py-10">
            {data.page_gallery.map((child) => (
                <div
                    key={child.id}
                    className="bg-gray-900 text-white border border-gray-700"
                >
                    <div className="overflow-hidden">
                        <img
                            src={`/gallery/${pageKey}/${child.img_path}`}
                            alt={child.title}
                            className="w-full h-48 object-cover hover:scale-105 transition-all duration-300"
                        />
                    </div>
                    <div className="p-5">
                        <Link
                            href={`${child?.href_link}`}
                            className="text-xl text-center line-clamp-2"
                            target="_blank"
                        >
                            {child.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
