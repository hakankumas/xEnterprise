import Gallery1 from "@/components/website/pages/gallery/Gallery1";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Referanslarımız",
    description: "Hakan KUMAŞ'ın referanslar sayfası.",
};

export default function References() {
    return (
        <div className="container mx-auto">
            <Gallery1 pageKey="referanslarimiz" />
        </div>
    );
}
