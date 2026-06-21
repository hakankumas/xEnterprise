import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const data = await prisma.pages.findMany({
        include: {
            children: true,
        },
        where: {
            id: 2,
        },
    });

    return NextResponse.json(data);
}
