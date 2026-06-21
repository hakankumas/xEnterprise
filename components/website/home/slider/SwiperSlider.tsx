"use client";

// Dependencies
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Types
import { Slider } from "@/types/slider";

export default function SwiperSlider() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["sliders"],
        queryFn: async () => {
            const res = await axios.get<Slider[]>("/api/website/slider");
            return res.data;
        },
        staleTime: Infinity,
    });

    if (isLoading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata oluştu!</div>;
    if (!data) return null;

    return (
        <div className="w-full h-[700px] lg:h-[650px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                grabCursor
                autoplay={{ delay: 3000 }}
                loop={data.length > 1}
            >
                {data.map((slider) => (
                    <SwiperSlide key={slider?.id}>
                        <img
                            src={"/gallery/slider/" + slider?.img_path}
                            alt={slider?.title}
                            className="w-full h-[700px] lg:h-[650px] object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
