import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
// export async function POST() {}
