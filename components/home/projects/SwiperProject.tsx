"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";

export default function SwiperProject() {
    return (
        <div className="flex flex-col gap-4 w-full h-fit px-4 lg:px-0 pb-10 lg:pt-10">
            <div className="flex flex-col items-center">
                <p className="text-3xl">Projelerimiz</p>
                <h2 className="text-xl">Kurumsal Yazılım Hizmetleri</h2>
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
                    loop={true}
                >
                    {Array.from({ length: 10 }, (_, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center gap-3 bg-gray-900 shadow-2xl">
                                <img
                                    src="https://placehold.co/500x500"
                                    alt="Hizmet 1"
                                    className="w-96 h-96 object-cover"
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
