"use client";

// Core
import Link from "next/link";
// Dependencies
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
// Types
import { Page_Children } from "@/types/relations/page_children";

export default function SwiperProject() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await axios.get<Page_Children>(
                "/api/website/projelerimiz"
            );
            return res.data;
        },
        staleTime: Infinity,
    });

    if (isLoading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata oluştu!</div>;
    if (!data) return null;

    return (
        <div className="flex flex-col gap-4 w-full h-fit px-4 lg:px-0 pb-10 lg:pt-10">
            <div className="flex flex-col items-center">
                <p className="text-4xl">{data.title}</p>
                <h2 className="text-lg">{data.sub_title}</h2>
            </div>
            <div>
                <Swiper
                    modules={[Autoplay, EffectCoverflow]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 300,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    autoplay={{ delay: 2500 }}
                    loop={data.children.length > 1}
                >
                    {data.children.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="flex flex-col items-center gap-3 bg-gray-900 shadow-2xl">
                                <img
                                    src={`/gallery/projelerimiz/${project.img_path}`}
                                    alt={project.title}
                                    className="w-96 h-96 object-cover"
                                />
                                <div className="flex flex-col gap-4 px-5 pb-4">
                                    <h3 className="text-xl text-center">
                                        {project.title}
                                    </h3>
                                    <p className="text-justify">
                                        {project?.label}
                                    </p>
                                    <Link
                                        href={`/projelerimiz/${project.slug}`}
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
        </div>
    );
}
