import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../hooks/hooks"
import { todoRedThunks } from "../../store/reducers/todoReducer"
import { Todo } from "./todo/todo"
import css from './todopage.module.css'

type TodoPagePropsType = {
    
}
export const TodoPage: FC<TodoPagePropsType> = ({  }) => {

    const dispatch = useDispatch()
    const { todos } = useAppSelector(state => state.todoReducer)

    useEffect(() => {
        dispatch(todoRedThunks.getTodos())
    }, [])

    // useEffect(() => {
    //     dispatch(todoRedThunks.getWeather())
    // }, [todos])

    return <>
        <main className={css.todoPage}>
            <h1 className={css.heading}>Todos:</h1>
            <div className={css.todos}>
                {todos.map( el => <Todo key={el.id} todo={el} />)}

            </div>
        </main>
    </>
}