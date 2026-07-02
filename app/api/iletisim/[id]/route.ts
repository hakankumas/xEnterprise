import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const { contact_id, socialmedia_type, label, href, iframe, active } =
        await req.json();
    if (active !== undefined) {
        await prisma.contact_data.update({
            where: {
                id: Number(id),
            },
            data: {
                active,
            },
        });
    } else {
        await prisma.contact_data.update({
            where: {
                id: Number(id),
            },
            data: {
                contact_id:
                    contact_id === "social"
                        ? Number(socialmedia_type)
                        : Number(contact_id),
                label,
                href,
                iframe,
            },
        });
    }

    return NextResponse.json({ success: true });
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    await prisma.contact_data.delete({
        where: {
            id: Number(id),
        },
    });

    return NextResponse.json({ success: true });
}
