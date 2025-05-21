// app/api/todo/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(todos)
}

export async function POST(req: NextRequest) {
  const { action, id, title } = await req.json()

  if (action === 'add') {
    const newTodo = await prisma.todo.create({ data: { title } })
    return NextResponse.json(newTodo)
  }

  if (action === 'toggle') {
    const todo = await prisma.todo.findUnique({ where: { id } })
    if (!todo) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const updated = await prisma.todo.update({
      where: { id },
      data: { completed: !todo.completed },
    })
    return NextResponse.json(updated)
  }

  if (action === 'delete') {
    await prisma.todo.delete({ where: { id } })
    return NextResponse.json({ message: 'Deleted' })
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
}
