import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const data = await prisma.pages.findFirst({
        include: {
            children: true,
        },
        where: {
            id: 6,
        },
    });

    return NextResponse.json(data);
}
