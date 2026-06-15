import Card2 from "@/components/pages/cards/Card2";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projelerimiz",
    description: "Hakan KUMAŞ'ın projeler sayfası.",
};

export default function Projects() {
    return (
        <div className="container mx-auto">
            <Card2 />
        </div>
    );
}
