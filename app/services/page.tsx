import Card1 from "@/components/pages/cards/Card1";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hizmetlerimiz",
    description: "Hakan KUMAŞ'ın hizmetler sayfası.",
};

export default function Services() {
    return (
        <div>
            <Card1 />
        </div>
    );
}
