import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import slugify from "slugify";

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const formData = await req.formData();

    const file = formData.get("file") as File | null;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    const uploadDir = path.join(process.cwd(), "public/gallery/slider");
    await fs.mkdir(uploadDir, { recursive: true });

    const slider = await prisma.slider.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!slider) {
        return NextResponse.json(
            { success: false, message: "Slider bulunamadı" },
            { status: 404 }
        );
    }

    const titleChanged = slider.title !== title;
    const fileChanged = file && file.size > 0;

    let finalImgPath = slider.img_path;

    if (titleChanged || fileChanged) {
        const oldExtension = slider.img_path.split(".").pop();

        const newExtension = fileChanged
            ? file.type.split("/")[1]
            : oldExtension;

        const sameTitleCount = await prisma.slider.count({
            where: {
                title,
                NOT: {
                    id: Number(id),
                },
            },
        });

        finalImgPath = `${slugify(title, {
            lower: true,
            strict: true,
            locale: "tr",
        })}${
            sameTitleCount > 0 ? `-${sameTitleCount + 1}` : ""
        }.${newExtension}`;
    }

    const oldPath = path.join(uploadDir, slider.img_path);
    const newPath = path.join(uploadDir, finalImgPath);

    if (fileChanged) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        await fs.writeFile(newPath, buffer);

        if (slider.img_path !== finalImgPath) {
            try {
                await fs.unlink(oldPath);
            } catch {}
        }
    } else if (titleChanged && slider.img_path !== finalImgPath) {
        try {
            await fs.rename(oldPath, newPath);
        } catch {}
    }

    await prisma.slider.update({
        where: {
            id: Number(id),
        },
        data: {
            title,
            description,
            lang_code: "tr",
            img_path: finalImgPath,
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
