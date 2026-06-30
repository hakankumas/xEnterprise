import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const data = await prisma.pages.findMany({
        where: {
            headpage_id: null,
        },
        include: {
            children: true,
        },
    });

    return NextResponse.json(data);
}
