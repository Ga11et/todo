import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../hooks/hooks"
import { todoRedThunks } from "../../store/reducers/todoReducer"
import { Todo } from "./todo/todo"
import css from './todopage.module.css'

type TodoPagePropsType = {

}
export const TodoPage: FC<TodoPagePropsType> = ({ }) => {

    const dispatch = useDispatch()
    const { todos } = useAppSelector(state => state.todoReducer)

    const createTodoHandler = () => {
        let title = prompt('Введите Todo')
        if (title === null) title = ''
        dispatch(todoRedThunks.addTodo({ title, userId: 1, completed: false, id: todos.length + 1 }))
    }

    useEffect(() => {
        dispatch(todoRedThunks.getTodos())
    }, [])

    return <>
        <main className={css.todoPage}>
            <div className={css.top}>
                <h1 className={css.heading}>Todos:</h1>
                <button className={css.button}
                    onClick={createTodoHandler}
                >Создать Todo</button>
            </div>
            <div className={css.todos}>
                {todos.map(el => <Todo key={el.id} todo={el} />)}

            </div>
        </main>
    </>
}