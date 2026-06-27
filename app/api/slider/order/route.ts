import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
    const body = await req.json();

    await prisma.$transaction(
        body.map((item: { id: number; sort_order: number }) =>
            prisma.slider.update({
                where: {
                    id: item.id,
                },
                data: {
                    sort_order: item.sort_order,
                },
            })
        )
    );

    return NextResponse.json({ success: true });
}
