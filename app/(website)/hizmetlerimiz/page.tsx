import { Metadata } from "next";
import Card1 from "@/components/website/pages/card/Card1";

export const metadata: Metadata = {
    title: "Hizmetlerimiz",
    description: "Hakan KUMAŞ'ın hizmetler sayfası.",
};

export default function Services() {
    return (
        <div className="container mx-auto">
            <Card1 pageKey="hizmetlerimiz" />
        </div>
    );
}
