import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const data = await prisma.slider.findMany({
        where: {
            active: true,
        },
        orderBy: {
            id: "asc",
        },
    });

    return NextResponse.json(data);
}
