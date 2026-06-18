import Gallery1 from "@/components/website/pages/gallery/Gallery1";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "İş Ortaklarımız",
    description: "Hakan KUMAŞ'ın iş ortakları sayfası.",
};

export default function Partners() {
    return (
        <div className="container mx-auto">
            <Gallery1 />
        </div>
    );
}
