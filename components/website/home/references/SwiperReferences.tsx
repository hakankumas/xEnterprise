"use client";

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

export default function SwiperReferences() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["references"],
        queryFn: async () => {
            const res = await axios.get<Page_PageGallery>(
                "/api/referanslarimiz"
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
                    loop={data.page_gallery.length > 1}
                    grabCursor={true}
                >
                    {data.page_gallery.map((reference) => (
                        <SwiperSlide key={reference.id}>
                            <div className="flex flex-col items-center">
                                <img
                                    src={`/gallery/referanslarimiz/${reference.img_path}`}
                                    alt={reference?.title}
                                    className="lg:w-50 lg:h-50 object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div>
                <SeeAll slug="referanslarimiz" />
            </div>
        </div>
    );
}
