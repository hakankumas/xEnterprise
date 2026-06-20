"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import axios from "axios";
import { Slider } from "@/types/slider";

export default function SwiperSlider() {
    const [sliders, setSliders] = useState<Slider[]>([]);

    const getAllSliders = async () => {
        try {
            const { data } = await axios.get<Slider[]>("/api/website/slider");
            setSliders(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllSliders();
    }, []);

    if (!sliders) return null;
    return (
        <div className="w-full h-[700px] lg:h-[650px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                grabCursor
                autoplay={{ delay: 3000 }}
                loop={sliders.length > 1}
            >
                {sliders.map((slider) => (
                    <SwiperSlide key={slider?.id}>
                        <img
                            src={"/slider/" + slider?.img_path}
                            alt={slider?.title}
                            className="w-full h-[700px] lg:h-[650px] object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
