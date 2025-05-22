import Link from "next/link";
import TodoList from './components/TodoList'

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoList />
      <Link href="/users">Users</Link>
    </main>
  )
}
