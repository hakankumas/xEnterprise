"use client";

// Components
import Breadcrumb from "../../Breadcrumb";
// Dependencies
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// Types
import { Page } from "@/types/page";

interface PageProps {
    pageKey: string;
    pageKey2?: string;
}

export default function Row({ pageKey, pageKey2 }: PageProps) {
    const { data, isLoading, error } = useQuery({
        queryKey: [`${pageKey2 ? `${pageKey}/${pageKey2}` : pageKey}`],
        queryFn: async () => {
            const res = await axios.get<Page>(
                `/api/${pageKey2 ? `${pageKey}/${pageKey2}` : pageKey}`
            );
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

            <div className="p-5 lg:px-0 lg:py-10">
                <img
                    src={`/gallery/${pageKey}/${data.img_path}`}
                    alt={data.sub_title ?? ""}
                    className="w-full lg:w-1/3 lg:float-left lg:mr-6 mb-4 lg:mb-4"
                    loading="lazy"
                />
                <p className="text-justify">{data.content}</p>
            </div>
        </>
    );
}
