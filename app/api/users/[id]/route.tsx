import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
    request: NextRequest,
    // 这里提到前文一个错误，slug中的id，比如 user/1，这个1被读取时是String而非number，使用时需要手动 parseInt
    { params: { id } }: { params: { id: string } }
) {
    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (!user)
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    return NextResponse.json({ id, name: "Castamere" });
}