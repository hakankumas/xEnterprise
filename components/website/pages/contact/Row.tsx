"use client";
// Core
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { iconMap } from "@/lib/icons";
// Types
import { ContactData } from "@/types/relations/contact_contactData";
import Breadcrumb from "../../Breadcrumb";

export default function Row() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["iletisim"],
        queryFn: async () => {
            const res = await axios.get<ContactData[]>("/api/iletisim");
            return res.data;
        },
        staleTime: Infinity,
    });

    if (isLoading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata oluştu!</div>;
    if (!data) return null;
    return (
        <>
            <Breadcrumb page_name={`İletişim`} href_link={`/iletisim`} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-fit p-3 lg:p-0 bg-gray-900 mt-5 lg:mt-10">
                <div className="h-fit flex flex-col gap-8 p-2 lg:p-5">
                    <h1 className="text-xl lg:text-3xl font-bold">
                        İletişim Bilgileri
                    </h1>
                    {data
                        .filter((item) => item.active && item.parent.id <= 3)
                        .map((item, index) => {
                            const Icon =
                                iconMap[
                                    item.parent.icon as keyof typeof iconMap
                                ];
                            return (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 hover:text-gray-400 transition-colors duration-300"
                                >
                                    {Icon && <Icon size={20} />}
                                    <span className="line-clamp-3">
                                        {item.label}
                                    </span>
                                </a>
                            );
                        })}
                    <div className="flex gap-5">
                        {data
                            .filter((item) => item.active && item.parent.id > 4)
                            .map((item, index) => {
                                const Icon =
                                    iconMap[
                                        item.parent.icon as keyof typeof iconMap
                                    ];
                                return (
                                    <a
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-sky-700 transition-colors duration-300"
                                        title={`Hakan KUMAŞ - ` + item.label}
                                    >
                                        {Icon && <Icon size={30} />}
                                    </a>
                                );
                            })}
                    </div>
                </div>
                <div className="h-100">
                    <iframe
                        src={
                            data.filter((item) => item.parent.id === 3)[0]
                                .iframe
                        }
                        loading="lazy"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </>
    );
}
