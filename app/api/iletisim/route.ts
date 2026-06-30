import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    const data = await prisma.contact_data.findMany({
        include: {
            parent: true,
        },
    });

    return NextResponse.json(data);
}
