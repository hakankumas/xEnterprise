import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

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

    // Dosyayı Localden Sil
    const getData = await prisma.slider.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!getData) {
        return NextResponse.json(
            { error: "Slider bulunamadı" },
            { status: 404 }
        );
    }

    const filePath = path.join(
        process.cwd(),
        "public/gallery/slider",
        getData.img_path
    );

    await fs.unlink(filePath);

    // Veritabanından Kaydı Sil
    await prisma.slider.delete({
        where: {
            id: Number(id),
        },
    });

    return NextResponse.json({ success: true });
}
