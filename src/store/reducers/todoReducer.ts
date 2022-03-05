import { API } from "../../api/api"
import { actionsTypes, todoType } from "../models/models"

const initialState = {
    todos: [] as todoType[],
    isLoading: [] as number[],

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
                if (el.id === action.todo.id) {
                    el.title = action.todo.title
                    el.completed = action.todo.completed
                }
            })
            return {
                ...state,
                todos: [...state.todos]
            }
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.action ? [...state.isLoading, action.id]
                    : [...state.isLoading.filter(el => el !== action.id)]
            }
        default:
            return state
    }
}

export const todoRedActions = {
    getTodos: (todoList: todoType[]) => ({ type: 'GET_TODOS', todoList } as const),
    deleteTodo: (id: number) => ({ type: 'DELETE_TODO', id } as const),
    updateTodo: (todo: todoType) => ({ type: 'UPDATE_TODO', todo } as const),
    addTodo: (todo: todoType) => ({ type: 'ADD_TODO', todo } as const),
    changeLoading: (action: boolean, id: number) => ({ type: 'CHANGE_LOADING', action, id } as const),
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
        dispatch(todoRedActions.changeLoading(true, todo.id))
        const response = await API.updateTodo(todo)
        if (response.status === 200) {
            dispatch(todoRedActions.updateTodo(response.data.todo))
            dispatch(todoRedActions.changeLoading(false ,todo.id))
        }
    },
    addTodo: (todo: todoType) => async (dispatch: dispatchType) => {
        const response = await API.addTodo(todo)
        if (response.status === 201) {
            dispatch(todoRedActions.addTodo(response.data.todo))
        }
    },
}