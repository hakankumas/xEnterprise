import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    const data = await prisma.contact_data.findMany({
        orderBy: {
            sort_order: "asc",
        },
        include: {
            parent: true,
        },
    });

    return NextResponse.json(data);
}

// CREATE
export async function POST(req: Request) {
    const { contact_id, socialmedia_type, label, href, iframe } =
        await req.json();

    await prisma.contact_data.create({
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

    return NextResponse.json({ success: true });
}
