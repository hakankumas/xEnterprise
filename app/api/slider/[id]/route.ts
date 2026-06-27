import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const { active } = await req.json();

    await prisma.slider.update({
        where: {
            id: Number(id),
        },
        data: {
            active,
        },
    });

    return NextResponse.json({ success: true });
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    await prisma.slider.delete({
        where: {
            id: Number(id),
        },
    });

    return NextResponse.json({ success: true });
}
