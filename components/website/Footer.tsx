import { socialMediaLinks } from "@/variables/SocialMediaItems";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Footer() {
    return (
        <div className="bg-gray-800 text-white">
            <div className="container mx-auto">
                <div className="py-5 grid grid-cols-1 lg:grid-cols-4 justify-between">
                    <div className="my-5 flex justify-center lg:justify-start">
                        <img
                            src="/logo.png"
                            alt="Hakan KUMAŞ - Logo"
                            className="w-32 h-32"
                        />
                    </div>

                    <div className="my-5 text-center lg:text-start flex flex-col lg:flex-row gap-8">
                        <div>
                            <h3 className="text-lg font-bold mb-2">
                                Bağlantılar
                            </h3>
                            <div className="footer-menu flex flex-col gap-2">
                                <Link href="/">Ana Sayfa</Link>
                                <Link href="/hakkimizda">Hakkımızda</Link>
                                <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
                                <Link href="/projelerimiz">Projelerimiz</Link>
                            </div>
                        </div>
                    </div>

                    <div className="my-5 text-center lg:text-start flex flex-col lg:flex-row gap-8">
                        <div>
                            <h3 className="text-lg font-bold mb-2">
                                Bağlantılar
                            </h3>
                            <div className="footer-menu flex flex-col gap-2">
                                <Link href="/is-ortaklarimiz">
                                    İş Ortaklarımız
                                </Link>
                                <Link href="/referanslarimiz">
                                    Referanslarımız
                                </Link>
                                <Link href="/blog">Blog</Link>
                                <Link href="/iletisim">İletişim</Link>
                            </div>
                        </div>
                    </div>

                    <div className="my-5 text-center lg:text-start flex flex-col gap-4">
                        <h3 className="text-lg font-bold mb-2">
                            İletişim Bilgileri
                        </h3>
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
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
                        </div>
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
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
                        </div>
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
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
                        </div>
                        <div className="flex items-center gap-10 lg:gap-5 justify-center lg:justify-start">
                            {socialMediaLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={
                                        link.active
                                            ? "text-gray-300 hover:text-gray-400 transition-colors duration-300 text-xl"
                                            : "hidden"
                                    }
                                    title={`Hakan KUMAŞ - ` + link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center pb-5">
                    <a
                        href="https://hakankumas.com.tr"
                        target="_blank"
                        title="Hakan KUMAŞ"
                    >
                        <img src="/logo.png" alt="" className="w-10 h-10" />
                    </a>
                </div>
            </div>
        </div>
    );
}
