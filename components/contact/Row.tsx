import { socialMediaLinks } from "@/variables/SocialMediaItems";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Row() {
    return (
        <div className="flex flex-col lg:flex-row justify-between p-5 gap-10 lg:gap-0 lg:border border-gray-700 lg:mt-3">
            <div className="flex flex-col w-full lg:w-1/2 gap-5">
                <p className="text-2xl font-bold">İletişim Bilgileri</p>
                <a
                    href="mailto:info@hakankumas.com.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-300"
                >
                    <span>
                        <IoMail size={20} />
                    </span>
                    <span>info@hakankumas.com.tr</span>
                </a>
                <a
                    href="tel:+905344408084"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-300"
                >
                    <span>
                        <FaPhoneAlt size={20} />
                    </span>
                    <span>+90 534 440 80 84</span>
                </a>
                <a
                    href="https://www.google.com/maps/place/Sakarya/T%C3%BCrkiye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-300"
                >
                    <span>
                        <FaLocationDot size={20} />
                    </span>
                    <span>Sakarya/Türkiye</span>
                </a>
                <div className="flex items-center gap-5">
                    {socialMediaLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={
                                link.active
                                    ? "text-gray-300 hover:text-gray-400 transition-colors duration-300 text-xl"
                                    : "hidden"
                            }
                            title={`Hakan KUMAŞ - ` + link.name}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
            <div className="w-full lg:w-1/2 h-96">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96722.76535714738!2d30.299893471309307!3d40.749125200390274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb2fad58e639f%3A0xb84f12f8c14f1221!2sSakarya!5e0!3m2!1str!2str!4v1781115782265!5m2!1str!2str"
                    loading="lazy"
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    );
}
