'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState<any[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    const res = await fetch('/api/todo')
    const data = await res.json()
    setTodos(data)
  }

  async function addTodo() {
    await fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({ action: 'add', title }),
    })
    setTitle('')
    fetchTodos()
  }

  async function toggleComplete(id: string) {
    await fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({ action: 'toggle', id }),
    })
    fetchTodos()
  }

  async function deleteTodo(id: string) {
    await fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({ action: 'delete', id }),
    })
    fetchTodos()
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
          placeholder="Add a todo"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white p-2">Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </main>
  )
}
