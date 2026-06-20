import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const data = await prisma.pages.findMany({
        include: {
            page_gallery: true,
        },
        where: {
            slug: "referanslarimiz",
        },
    });

    return NextResponse.json(data);
}
