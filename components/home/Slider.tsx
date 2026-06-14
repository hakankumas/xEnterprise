"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
    return (
        <div className="w-full h-[500px]]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
            >
                <SwiperSlide>
                    <img
                        src="https://placehold.co/1600x600"
                        alt="Resim 1"
                        className="w-full h-[750px] lg:h-[600px] object-cover"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="https://placehold.co/1200x500"
                        alt="Resim 2"
                        className="w-full h-[750px] lg:h-[600px] object-cover"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="https://placehold.co/1000x400"
                        alt="Resim 3"
                        className="w-full h-[750px] lg:h-[600px] object-cover"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
