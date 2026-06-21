"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Page_PageGallery } from "@/types/relations/page_pageGallery";

export default function SwiperPartner() {
    const [isOrtaklarimiz, setIsOrtaklarimiz] =
        useState<Page_PageGallery | null>(null);
    const getIsOrtaklarimiz = async () => {
        try {
            const { data } = await axios.get<Page_PageGallery>(
                "/api/website/is-ortaklarimiz"
            );
            setIsOrtaklarimiz(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getIsOrtaklarimiz();
    }, []);

    useEffect(() => {
        console.log(isOrtaklarimiz);
    }, [isOrtaklarimiz]);

    if (!isOrtaklarimiz) return null;
    return (
        <div className="flex flex-col gap-4 w-full h-fit px-4 lg:px-0 pb-10 -translate-y-8 lg:translate-y-0">
            <div className="flex flex-col items-center">
                <p className="text-4xl">{isOrtaklarimiz.title}</p>
                <h2 className="text-lg">{isOrtaklarimiz.sub_title}</h2>
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
                    {isOrtaklarimiz.page_gallery.map((gallery) => (
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
        </div>
    );
}
