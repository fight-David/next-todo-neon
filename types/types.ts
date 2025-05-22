export interface Todo {
    id: string
    title: string
    completed: boolean
    createdAt?: string
}


export interface User {
    id: Int16Array
    name: string
    email: string
    followers: Int16Array
    isActive: boolean
}