import Column from "@/components/pages/about/Column";
import Row from "@/components/pages/about/Row";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda",
    description: "Hakan KUMAŞ hakkında bilgiler.",
};

export default function About() {
    return (
        <div>
            <Row />
            {/* <Column /> */}
        </div>
    );
}
