import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
    const { id, active } = await req.json();

    await prisma.contact_data.update({
        where: {
            id: Number(id),
        },
        data: {
            active,
        },
    });
    return NextResponse.json({ success: true });
}
