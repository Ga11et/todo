import { API } from "../../api/api"
import { actionsTypes, todoType } from "../models/models"

const initialState = {
    todos: [] as todoType[],

}

type initialStateType = typeof initialState
export const todoReducer = (state = initialState, action: actionsTypes<typeof todoRedActions>): initialStateType => {
    switch (action.type) {
        case 'GET_TODOS':
            return {
                ...state,
                todos: action.todoList
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(el => el.id !== action.id)
            }
        case 'UPDATE_TODO':
            state.todos.forEach( el => {
                if (el.id === action.todo.id) el.title = action.todo.title
            })
            return {
                ...state,
                todos: [...state.todos]
            }
        default:
            return state
    }
}

export const todoRedActions = {
    getTodos: (todoList: todoType[]) => ({ type: 'GET_TODOS', todoList } as const),
    deleteTodo: (id: number) => ({ type: 'DELETE_TODO', id } as const),
    updateTodo: (todo: todoType) => ({ type: 'UPDATE_TODO', todo } as const),
}

type dispatchType = (action: actionsTypes<typeof todoRedActions>) => void

export const todoRedThunks = {
    getTodos: () => async (dispatch: dispatchType) => {
        const response = await API.getTodos()
        dispatch(todoRedActions.getTodos(response))
    },
    deleteTodo: (id: number) => async (dispatch: dispatchType) => {
        const response = await API.deleteTodo(id)
        if (response === 200) {
            dispatch(todoRedActions.deleteTodo(id))
        }
    },
    updateTodo: (todo: todoType) => async (dispatch: dispatchType) => {
        const response = await API.updateTodo(todo)
        if (response.status === 200) {
            dispatch(todoRedActions.updateTodo(response.data.todo))
        }
    },
}