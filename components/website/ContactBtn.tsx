"use client";
// Core
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { iconMap } from "@/lib/icons";
// Types
import { ContactData } from "@/types/relations/contact_contactData";
import clsx from "clsx";

export default function ContactBtn() {
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
        <div className="fixed bottom-5 right-5 lg:right-10 flex flex-col items-end gap-4 z-50">
            {data
                .filter(
                    (item) =>
                        item.active &&
                        item.parent.id <= 4 &&
                        item.parent.id != 2
                )
                .map((item, index) => {
                    const Icon =
                        iconMap[item.parent.icon as keyof typeof iconMap];

                    return (
                        <a
                            key={index}
                            href={
                                item.parent.id === 4
                                    ? `https://wa.me/${item.href}`
                                    : item.href
                            }
                            title={`${item.parent.name} - ${item.label}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={clsx(
                                "group flex items-center justify-end overflow-hidden rounded-full text-white shadow-lg transition-all duration-300",
                                item.parent.id === 1 &&
                                    "bg-blue-600 hover:bg-blue-700",
                                item.parent.id === 4 &&
                                    "bg-green-600 hover:bg-green-700",
                                item.parent.id === 3 &&
                                    "bg-gray-600 hover:bg-gray-700",
                                "w-14 hover:w-fit px-4 py-4"
                            )}
                        >
                            <span className="mr-0 max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 group-hover:mr-3 group-hover:max-w-fit group-hover:opacity-100">
                                {item.label}
                            </span>

                            {Icon && (
                                <div className="shrink-0">
                                    <Icon size={24} />
                                </div>
                            )}
                        </a>
                    );
                })}
        </div>
    );
}
