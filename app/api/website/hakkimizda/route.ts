import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const data = await prisma.pages.findUnique({
        where: {
            id: 1,
        },
    });

    return NextResponse.json(data);
}
