import { Todo } from '@/types/todo'

export async function fetchTodos(): Promise<Todo[]> {
    const res = await fetch('/api/todo')
    return res.json()
}

export async function addTodo(title: string) {
    await fetch('/api/todo', {
        method: 'POST',
        body: JSON.stringify({ action: 'add', title }),
    })
}

export async function toggleTodo(id: string) {
    await fetch('/api/todo', {
        method: 'POST',
        body: JSON.stringify({ action: 'toggle', id }),
    })
}

export async function deleteTodo(id: string) {
    await fetch('/api/todo', {
        method: 'POST',
        body: JSON.stringify({ action: 'delete', id }),
    })
}
