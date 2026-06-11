import Gallery2 from "@/components/gallery/Gallery2";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Referanslarımız",
    description: "Hakan KUMAŞ'ın referanslar sayfası.",
};

export default function References() {
    return (
        <div>
            <Gallery2 />
        </div>
    );
}
