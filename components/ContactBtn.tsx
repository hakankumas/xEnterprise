import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactBtn() {
    return (
        <div className="fixed bottom-5 right-5 md:right-10 flex flex-col gap-4 z-50">
            <a
                href="tel:+905344408084"
                className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
            >
                <FaPhoneAlt size={24} />
            </a>

            <a
                href="https://wa.me/905344408084"
                className="bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition-colors"
                target="_blank"
            >
                <FaWhatsapp size={24} />
            </a>

            <a
                href="#"
                className="bg-gray-600 text-white rounded-full p-4 shadow-lg hover:bg-gray-700 transition-colors"
                target="_blank"
            >
                <FaLocationDot size={24} />
            </a>
        </div>
    );
}
