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
import { Page_PageGallery } from "@/types/relations/page_pageGallery";
import SeeAll from "../../SeeAll";

export default function SwiperPartner() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["partners"],
        queryFn: async () => {
            const res = await axios.get<Page_PageGallery>(
                "/api/website/is-ortaklarimiz"
            );
            return res.data;
        },
        staleTime: Infinity,
    });

    if (isLoading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata oluştu!</div>;
    if (!data) return null;

    return (
        <div className="flex flex-col gap-4 w-full h-fit px-4 lg:px-0 pb-10 -translate-y-8 lg:translate-y-0">
            <div className="flex flex-col items-center">
                <p className="text-4xl">{data.title}</p>
                <h2 className="text-lg">{data.sub_title}</h2>
            </div>
            <div>
                <Swiper
                    modules={[Autoplay]}
                    effect="slide"
                    spaceBetween={40}
                    slidesPerView={2}
                    breakpoints={{
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 0,
                        },
                    }}
                    autoplay={{ delay: 2500 }}
                    loop={true}
                    grabCursor
                >
                    {data.page_gallery.map((gallery) => (
                        <SwiperSlide key={gallery.id}>
                            <div className="flex flex-col items-center">
                                <Link
                                    href={gallery.href_link ?? "#"}
                                    target={
                                        gallery.href_link ? "_blank" : "_self"
                                    }
                                >
                                    <img
                                        src={
                                            "/gallery/is-ortaklarimiz/" +
                                            gallery.img_path
                                        }
                                        alt={gallery.title}
                                        title={gallery.title}
                                        className="lg:w-50 lg:h-50 object-cover"
                                    />
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div>
                <SeeAll slug="is-ortaklarimiz" />
            </div>
        </div>
    );
}
