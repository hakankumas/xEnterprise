"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function SwiperReferences() {
    return (
        <div className="flex flex-col gap-4 w-full h-fit px-4 lg:px-0 pb-10 lg:pt-10">
            <div className="flex flex-col items-center">
                <p className="text-4xl">Referanslarımız</p>
                <h2 className="text-lg">Uzman Yazılım Desteği</h2>
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
                    grabCursor={true}
                >
                    {Array.from({ length: 10 }, (_, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center">
                                <img
                                    src="https://placehold.co/500x500"
                                    alt="Hizmet 1"
                                    className="lg:w-50 lg:h-50 object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
