import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export const contactItems = {
    address: {
        icon: <FaLocationDot size={20} />,
        label: "Sakarya/Türkiye",
        href: "https://www.google.com/maps/place/Sakarya/T%C3%BCrkiye",
    },
    email: {
        icon: <IoMail size={20} />,
        label: "hakankumas54@gmail.com",
        href: "mailto:hakankumas54@gmail.com",
    },
    phone: {
        icon: <FaPhoneAlt size={20} />,
        label: "+90 534 440 80 84",
        href: "tel:+905344408084",
    },
};
