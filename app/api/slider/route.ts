import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import fs from "fs/promises";
import path from "path";
import slugify from "slugify";
// GETALL
export async function GET() {
    const data = await prisma.slider.findMany({
        orderBy: {
            sort_order: "asc",
        },
    });

    return NextResponse.json(data);
}

// CREATE
export async function POST(req: Request) {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
        return NextResponse.json(
            { error: "Dosya bulunamadı" },
            { status: 400 }
        );
    }

    // Buffer, Node.js'in binary (ikili) veriyi bellekte tutmak ve işlemek için kullandığı veri tipidir.
    // <input type="file"> ile yüklenen dosya aslında sadece bir metin değildir.
    // Resim, PDF, video, zip gibi dosyalar binary data içerir.
    // Bunları diske yazabilmek için Buffer kullanılır.

    const bytes = await file.arrayBuffer();
    // Bu satır dosyanın tüm içeriğini RAM'e alır.
    // Örneğin:
    // resim.jpg
    // FF D8 FF E0 00 10 4A 46 49 46 ...
    // Artık bu veri bir ArrayBuffer içerisindedir.

    const buffer = Buffer.from(bytes);
    // Bu satır Node.js'in anlayacağı Buffer nesnesini oluşturur.
    // Artık şöyle bir veri elde etmiş olursun:
    // <Buffer ff d8 ff e0 00 10 4a 46 49 46 ...>

    const uploadDir = path.join(process.cwd(), "public/gallery/slider");
    await fs.mkdir(uploadDir, { recursive: true });

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    const isExist = await prisma.slider.findMany({
        where: {
            title,
        },
    });

    const revisedName = `${slugify(title, {
        lower: true,
        strict: true,
        locale: "tr",
    })}${isExist.length > 0 ? `-${isExist.length + 1}` : ""}.${
        file.type.split("/")[1]
    }`;

    // DB'ye kayıt.
    await prisma.slider.create({
        data: {
            title,
            description,
            lang_code: "tr",
            img_path: revisedName,
        },
    });

    // Locale kayıt.
    const filePath = path.join(uploadDir, revisedName);
    await fs.writeFile(filePath, buffer);
    // writeFile bu buffer'ı olduğu gibi diske yazar.

    return NextResponse.json({ message: "Slider oluşturuldu" });
}
