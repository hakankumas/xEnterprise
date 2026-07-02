"use client";

// Core
import Link from "next/link";
// Dependencies
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { iconMap } from "@/lib/icons";
// Types
import { ContactData } from "@/types/relations/contact_contactData";

export default function Footer() {
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
        <div className="bg-gray-800 text-white">
            <div className="container mx-auto flex flex-col gap-10 lg:gap-5 pt-10 pb-5">
                <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-10 lg:gap-0">
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src="/logo.png"
                            alt="Hakan KUMAŞ - Logo"
                            className="w-32 h-32"
                        />
                    </div>

                    <div className="flex flex-col gap-4 text-center lg:text-start">
                        <h3 className="text-xl font-bold">Bağlantılar</h3>
                        <div className="footer-menu flex flex-col gap-4">
                            <Link href="/">Ana Sayfa</Link>
                            <Link href="/hakkimizda">Hakkımızda</Link>
                            <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
                            <Link href="/projelerimiz">Projelerimiz</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 text-center lg:text-start">
                        <h3 className="text-xl font-bold">Bağlantılar</h3>
                        <div className="footer-menu flex flex-col gap-4">
                            <Link href="/is-ortaklarimiz">İş Ortaklarımız</Link>
                            <Link href="/referanslarimiz">Referanslarımız</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/iletisim">İletişim</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 text-center lg:text-start">
                        <h3 className="text-xl font-bold">
                            İletişim Bilgileri
                        </h3>
                        <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-5 justify-center lg:justify-start">
                            {data
                                .filter(
                                    (item) => item.active && item.parent.id <= 3
                                )
                                .map((item, index) => {
                                    const Icon =
                                        iconMap[
                                            item.parent
                                                .icon as keyof typeof iconMap
                                        ];
                                    return (
                                        <a
                                            key={index}
                                            href={item.href}
                                            title={`${item.parent.name} - ${item.label}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 hover:text-gray-400 transition-colors duration-300"
                                        >
                                            {Icon && <Icon size={20} />}
                                            <span>{item.label}</span>
                                        </a>
                                    );
                                })}
                        </div>
                        <div className="flex flex-row items-center gap-10 lg:gap-5 justify-center lg:justify-start pt-4 lg:pt-1">
                            {data
                                .filter(
                                    (item) => item.active && item.parent.id > 4
                                )
                                .map((item, index) => {
                                    const Icon =
                                        iconMap[
                                            item.parent
                                                .icon as keyof typeof iconMap
                                        ];
                                    return (
                                        <a
                                            key={index}
                                            href={item.href}
                                            title={`${item.parent.name} - ${item.label}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-gray-400 transition-colors duration-300 text-xl"
                                        >
                                            {Icon && <Icon size={25} />}
                                        </a>
                                    );
                                })}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <a
                        href="https://hakankumas.com.tr"
                        target="_blank"
                        title="Hakan KUMAŞ"
                    >
                        <img src="/logo.png" alt="" className="w-10 h-10" />
                    </a>
                </div>
            </div>
        </div>
    );
}
