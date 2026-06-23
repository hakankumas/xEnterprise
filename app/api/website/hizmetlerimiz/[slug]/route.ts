import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;

    const data = await prisma.pages.findFirst({
        where: {
            slug: slug,
        },
    });

    return NextResponse.json(data);
}
