import Gallery2 from "@/components/website/pages/gallery/Gallery2";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Referanslarımız",
    description: "Hakan KUMAŞ'ın referanslar sayfası.",
};

export default function References() {
    return (
        <div className="container mx-auto">
            <Gallery2 />
        </div>
    );
}
