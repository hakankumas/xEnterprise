import "./globals.css";
import type { Metadata } from "next";
import { Goldman } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBtn from "@/components/ContactBtn";

const goldman = Goldman({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-goldman",
});

export const metadata: Metadata = {
    title: {
        template: "%s | Hakan KUMAŞ",
        default: "Hakan KUMAŞ | Yazılım Geliştirici",
    },
    description:
        "Hakan KUMAŞ'ın kişisel web sitesi. Yazılım geliştirme, projeler, blog yazıları ve iletişim bilgileri.",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="tr" className={`${goldman.className} h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                <Header />
                <ContactBtn />
                <div className="min-h-screen">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
