import Row from "@/components/website/pages/page/Row";

export default async function ProjectDetails({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <div className="container mx-auto">
            <Row pageKey="projelerimiz" pageKey2={slug} />
        </div>
    );
}
