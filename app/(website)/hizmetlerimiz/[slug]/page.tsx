import Row from "@/components/website/pages/page/Row";

export default async function ServiceDetails({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <div className="container mx-auto">
            <Row pageKey="hizmetlerimiz" pageKey2={slug} />
        </div>
    );
}
