"use client";

// Core
import Link from "next/link";
// Dependencies
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// Types
import { Page_Children } from "@/types/relations/page_children";
import SeeAll from "../../SeeAll";

export default function SwiperService() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const res = await axios.get<Page_Children>(
                "/api/website/hizmetlerimiz"
            );
            return res.data;
        },
        staleTime: Infinity,
    });

    if (isLoading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata oluştu!</div>;
    if (!data) return null;

    return (
        <div className="flex flex-col gap-4 w-full h-fit px-4 lg:px-0 -translate-y-8 lg:translate-y-0">
            <div className="flex flex-col items-center">
                <p className="text-4xl">{data.title}</p>
                <h2 className="text-lg">{data.sub_title}</h2>
            </div>
            <div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    grabCursor={true}
                    autoplay={{ delay: 2500 }}
                    loop={data.children.length > 4}
                >
                    {data.children.map((child) => (
                        <SwiperSlide key={child.id}>
                            <div className="flex flex-col items-center gap-3 bg-gray-900 shadow-2xl">
                                <img
                                    src={`/gallery/hizmetlerimiz/${child.img_path}`}
                                    alt={child.title}
                                    className="w-96 h-96 object-cover hover:rotate-y-180 transition duration-700"
                                />
                                <div className="flex flex-col gap-4 px-5 pb-4">
                                    <h3 className="text-xl text-center line-clamp-2">
                                        {child.title}
                                    </h3>
                                    <p className="text-justify line-clamp-5">
                                        {child.label}
                                    </p>
                                    <Link
                                        href={`/hizmetlerimiz/${child.slug}`}
                                        className="text-sm text-center text-gray-400 hover:text-white cursor-pointer"
                                    >
                                        Tümünü Gör
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div>
                <SeeAll slug="hizmetlerimiz" />
            </div>
        </div>
    );
}
