import Column from "@/components/website/pages/page/Column";
import Row from "@/components/website/pages/page/Row";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda",
    description: "Hakan KUMAŞ hakkında bilgiler.",
};

export default function About() {
    return (
        <div className="container mx-auto">
            <Row pageKey="hakkimizda" />
            {/* <Column /> */}
        </div>
    );
}
