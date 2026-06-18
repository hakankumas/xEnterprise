"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function SwiperService() {
    return (
        <div className="flex flex-col gap-4 w-full h-fit px-4 lg:px-0 -translate-y-8 lg:translate-y-0">
            <div className="flex flex-col items-center">
                <p className="text-4xl">Hizmetlerimiz</p>
                <h2 className="text-lg">Profesyonel Yazılım Çözümleri</h2>
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
                    loop={true}
                >
                    {Array.from({ length: 10 }, (_, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center gap-3 bg-gray-900 shadow-2xl">
                                <img
                                    src="https://placehold.co/500x500"
                                    alt="Hizmet 1"
                                    className="w-96 h-96 object-cover hover:rotate-y-180 transition duration-700"
                                />
                                <div className="flex flex-col gap-4 px-5 pb-4">
                                    <h3 className="text-xl text-center">
                                        Hizmet
                                    </h3>
                                    <p className="text-justify">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Qui in ipsum officiis
                                        eum, facilis dolores? Velit tenetur
                                        soluta, porro suscipit aliquid numquam
                                        aliquam laborum quibusdam est
                                        necessitatibus temporibus vitae in.
                                    </p>
                                    <p className="text-sm text-center text-gray-400 hover:text-white cursor-pointer">
                                        Tümünü Gör
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
