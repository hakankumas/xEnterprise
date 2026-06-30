"use client";
// Core
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { iconMap } from "@/lib/icons";
// Types
import { ContactData } from "@/types/relations/contact_contactData";
import Breadcrumb from "../../Breadcrumb";

export default function Column() {
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
            <div className="flex flex-col p-5 lg:px-0 gap-5">
                <div className="flex flex-col lg:flex-row gap-3">
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
                                    className="flex lg:flex-col items-center gap-2 bg-gray-300 hover:bg-gray-200 text-black w-full p-3 transition-colors duration-300"
                                >
                                    {Icon && <Icon size={20} />}
                                    <span>{item.label}</span>
                                </a>
                            );
                        })}
                    <div className="flex items-center lg:justify-center gap-5 bg-gray-300 hover:bg-gray-200 text-black w-full p-3 transition-colors duration-300">
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
                <div className="w-full h-96 lg:h-[500px]">
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
