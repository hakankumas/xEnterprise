import Column from "@/components/pages/contact/Column";
import Row from "@/components/pages/contact/Row";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "İletişim",
    description: "Hakan KUMAŞ'ın iletişim sayfası.",
};

export default function Contact() {
    return (
        <div className="container mx-auto">
            {/* <Row /> */}
            <Column />
        </div>
    );
}
