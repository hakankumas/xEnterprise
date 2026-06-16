"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function SwiperPartner() {
    return (
        <div className="flex flex-col gap-4 w-full h-fit px-4 lg:px-0 pb-10 -translate-y-8 lg:translate-y-0">
            <div className="flex flex-col items-center">
                <p className="text-4xl">İş Ortaklarımız</p>
                <h2 className="text-lg">Kurumsal Yazılım Hizmetleri</h2>
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
