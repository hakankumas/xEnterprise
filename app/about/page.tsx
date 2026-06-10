import Column from "@/components/about/Column";
import Row from "@/components/about/Row";
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
