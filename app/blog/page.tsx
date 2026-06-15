import Card3 from "@/components/pages/cards/Card3";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Hakan KUMAŞ'ın blog sayfası.",
};

export default function Blog() {
    return (
        <div className="container mx-auto">
            <Card3 />
        </div>
    );
}
