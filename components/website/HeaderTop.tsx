"use client";
// Core
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { iconMap } from "@/lib/icons";
// Types
import { ContactData } from "@/types/relations/contact_contactData";

export default function HeaderTop() {
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
        <div className="hidden lg:flex flex-row justify-between p-4 pb-0 text-gray-300">
            {data
                .filter((item) => item.active && item.parent.id <= 3)
                .map((item, index) => {
                    const Icon =
                        iconMap[item.parent.icon as keyof typeof iconMap];
                    return (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-300"
                        >
                            {Icon && <Icon size={20} />}
                            <span>{item.label}</span>
                        </a>
                    );
                })}
            <div className="hidden lg:flex gap-4 justify-center lg:justify-start">
                {data
                    .filter((item) => item.active && item.parent.id > 4)
                    .map((item, index) => {
                        const Icon =
                            iconMap[item.parent.icon as keyof typeof iconMap];
                        return (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-gray-400 transition-colors duration-300 text-xl"
                                title={`Hakan KUMAŞ - ` + item.label}
                            >
                                {Icon && <Icon size={25} />}
                            </a>
                        );
                    })}
            </div>
        </div>
    );
}
