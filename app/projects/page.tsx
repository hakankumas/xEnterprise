import Card2 from "@/components/pages/cards/Card2";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projelerimiz",
    description: "Hakan KUMAŞ'ın projeler sayfası.",
};

export default function Projects() {
    return (
        <div>
            <Card2 />
        </div>
    );
}
