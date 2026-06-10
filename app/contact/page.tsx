import Column from "@/components/contact/Column";
import Row from "@/components/contact/Row";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "İletişim",
    description: "Hakan KUMAŞ'ın iletişim sayfası.",
};

export default function Contact() {
    return (
        <div>
            {/* <Row /> */}
            <Column />
        </div>
    );
}
