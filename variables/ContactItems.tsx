import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const contactItems = {
    address: {
        icon: <FaLocationDot size={20} />,
        label: "Sakarya/Türkiye",
        href: "https://maps.app.goo.gl/AvBoQ92r5pLAA5LN6",
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96722.76535711488!2d30.299893445456664!3d40.74912520041269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb2fad58e639f%3A0xb84f12f8c14f1221!2sSakarya!5e0!3m2!1str!2str!4v1782760902596!5m2!1str!2str",
    },
    email: {
        icon: <FaEnvelope size={20} />,
        label: "hakankumas54@gmail.com",
        href: "mailto:hakankumas54@gmail.com",
    },
    phone: {
        icon: <FaPhoneAlt size={20} />,
        label: "+90 534 440 80 84",
        href: "tel:+905344408084",
    },
};
