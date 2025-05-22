'use client'

import { useEffect, useState } from 'react'
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from '../../lib/api-todo'
import { Todo } from '@/types/types'
import TodoItem from './TodoItem'

export default function TodoList() {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    loadTodos()
  }, [])

  async function loadTodos() {
    const data = await fetchTodos()
    setTodos(data)
  }

  async function handleAdd() {
    await addTodo(title)
    setTitle('')
    loadTodos()
  }

  async function handleToggle(id: string) {
    await toggleTodo(id)
    loadTodos()
  }

  async function handleDelete(id: string) {
    await deleteTodo(id)
    loadTodos()
  }

  return (
    <>
      <div className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
          placeholder="Add a todo"
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white p-2">Add</button>
      </div>

      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => handleToggle(todo.id)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
    </>
  )
}
