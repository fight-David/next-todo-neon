// findMany 方法
import schema from "./schema";
// 导入 prisma
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });
    // 检查是否已有重复
    const check = await prisma.user.findUnique({
        where: { email: body.email },
    });
    if (check)
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
    // 上传数据
    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
        },
    });
    return NextResponse.json(user, { status: 201 });
}

// 直接补全之前函数中空的部分
export async function PUT(
    request: NextRequest,
    { params: { id } }: { params: { id: string } }
) {
    // Validate the request body
    const body = await request.json();
    const validation = schema.safeParse(body);
    // If invalid, return 400
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });
    // Fetch the user
    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
    });
    // If does not exist, return 404
    if (!user)
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    // Update the user
    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
            name: body.name,
            email: body.email,
        },
    });
    // Return the updated user
    return NextResponse.json(updatedUser);
}

// 直接补全之前函数中空的部分
export async function DELETE(
    request: NextRequest,
    { params: { id } }: { params: { id: string } }
) {
    // Fetch user from db
    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
    });
    // If does not exist, return 404
    if (!user)
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    // Delete the user
    await prisma.user.delete({
        where: { id: user.id },
    });
    // Return 200
    return NextResponse.json({});
}