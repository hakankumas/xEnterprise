import Column from "@/components/website/pages/about/Column";
import Row from "@/components/website/pages/about/Row";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda",
    description: "Hakan KUMAŞ hakkında bilgiler.",
};

export default function About() {
    return (
        <div className="container mx-auto">
            <Row />
            {/* <Column /> */}
        </div>
    );
}
