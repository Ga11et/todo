import axios from "axios"
import { todoType } from "../store/models/models"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

// API

export const API = {
    getTodos: () => {
        return instance.get<todoType[]>(`todos`)
            .then( data => data.data)
    },
    deleteTodo: (id: number) => {
        return instance.delete<number>(`todos/${id}`)
            .then( data => data.status)
    },
    updateTodo: (todo: todoType) => {
        return instance.put<{todo: todoType}>(`todos/${todo.id}`, {todo})
            .then( data => data)
    },
    addTodo: (todo: todoType) => {
        return instance.post<{todo: todoType}>(`todos`, {todo})
            .then( data => data)
    },
}