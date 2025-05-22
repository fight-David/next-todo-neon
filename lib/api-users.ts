import { User } from '@/types/types'

export async function fetchUsers(): Promise<User[]> {
    const res = await fetch('/api/user')
    return res.json()
}

export async function addUser(title: string) {
    await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ action: 'add', title }),
    })
}

export async function toggleUser(id: string) {
    await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ action: 'toggle', id }),
    })
}

export async function deleteUser(id: string) {
    await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ action: 'delete', id }),
    })
}
