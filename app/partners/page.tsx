import Gallery1 from "@/components/pages/gallery/Gallery1";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "İş Ortaklarımız",
    description: "Hakan KUMAŞ'ın iş ortakları sayfası.",
};

export default function Partners() {
    return (
        <div>
            <Gallery1 />
        </div>
    );
}
