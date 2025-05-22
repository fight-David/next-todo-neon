import { Todo } from '@/types/types'

interface Props {
    todo: Todo
    onToggle: () => void
    onDelete: () => void
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
    return (
        <li className="flex items-center gap-2 mb-2">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle}
            />
            <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
            <button onClick={onDelete} className="text-red-500">Delete</button>
        </li>
    )
}
