import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { contactItems } from "@/variables/ContactItems";
import { socialMediaLinks } from "@/variables/SocialMediaItems";

export default function HeaderTop() {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between px-4 pt-4 lg:pb-2 text-gray-300">
            <a
                href={contactItems.address.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 hover:text-gray-400 transition-colors duration-300"
            >
                <span>{contactItems.address.icon}</span>
                <span>{contactItems.address.label}</span>
            </a>
            <a
                href={contactItems.email.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 hover:text-gray-400 transition-colors duration-300"
            >
                <span>{contactItems.email.icon}</span>
                <span>{contactItems.email.label}</span>
            </a>
            <div className="hidden lg:flex gap-4 justify-center lg:justify-start">
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
            <a
                href={contactItems.phone.href}
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-3 lg:mt-0 hover:text-gray-400 transition-colors duration-300"
            >
                <span>{contactItems.phone.icon}</span>
                <span>{contactItems.phone.label}</span>
            </a>
        </div>
    );
}
