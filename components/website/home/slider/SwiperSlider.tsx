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
            const res = await axios.get<Slider[]>("/api/slider");
            return res.data;
        },
        staleTime: Infinity,
    });

    if (isLoading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata oluştu!</div>;
    if (!data) return null;

    return (
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
                        className="relative w-full h-[600px] lg:h-[750px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute align-middle top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-white w-full px-10 lg:w-2/3 lg:px-0">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veniam, similique!
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
