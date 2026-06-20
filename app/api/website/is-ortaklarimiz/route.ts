import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const data = await prisma.pages.findFirst({
        include: {
            page_gallery: true,
        },
        where: {
            slug: "is-ortaklarimiz",
        },
    });

    return NextResponse.json(data);
}
