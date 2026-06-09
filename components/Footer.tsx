import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-gray-800 text-white py-5 flex flex-col md:flex-row justify-around">
            <div className="my-5 flex justify-center md:justify-start">
                <img
                    src="/logo.png"
                    alt="Hakan KUMAŞ - Logo"
                    className="w-32 h-32"
                />
            </div>

            <div className="my-5 text-center md:text-start flex flex-col md:flex-row gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-2">Bağlantılar</h3>
                    <div className="flex flex-col gap-2">
                        <Link href="/">Ana Sayfa</Link>
                        <Link href="/about">Hakkımızda</Link>
                        <Link href="/services">Hizmetlerimiz</Link>
                        <Link href="/projects">Projelerimiz</Link>
                        <Link href="/contact">İletişim</Link>
                    </div>
                </div>
            </div>

            <div className="my-5 text-center md:text-start">
                <h3 className="text-lg font-bold mb-2">İletişim Bilgileri</h3>
                <p>Email: info@hakankumas.com.tr</p>
                <p>Telefon: +90 123 456 78 90</p>
            </div>
        </div>
    );
}
