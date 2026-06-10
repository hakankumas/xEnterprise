import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { socialMediaLinks } from "../variables/SocialMediaItems";

export default function HeaderTop() {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between px-4 pt-4 lg:pb-2 text-gray-300">
            <a
                href="https://www.google.com/maps/place/Sakarya/T%C3%BCrkiye"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 hover:text-gray-400 transition-colors duration-300"
            >
                <span>
                    <FaLocationDot size={20} />
                </span>
                <span>Sakarya/Türkiye</span>
            </a>
            <a
                href="mailto:info@hakankumas.com.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 hover:text-gray-400 transition-colors duration-300"
            >
                <span>
                    <IoMail size={20} />
                </span>
                <span>info@hakankumas.com.tr</span>
            </a>
            <div className="hidden lg:flex gap-4 justify-center lg:justify-start">
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
            <a
                href="tel:+905344408084"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-3 lg:mt-0 hover:text-gray-400 transition-colors duration-300"
            >
                <span>
                    <FaPhoneAlt size={20} />
                </span>
                <span>+90 534 440 80 84</span>
            </a>
        </div>
    );
}
