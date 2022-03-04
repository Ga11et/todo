import { FC } from "react"
import { useDispatch } from "react-redux"
import { todoType } from "../../../store/models/models"
import { todoRedThunks } from "../../../store/reducers/todoReducer"
import css from './todo.module.css'

type TodoPropsType = {
    todo: todoType
}
export const Todo: FC<TodoPropsType> = ({ todo }) => {
    
    const { completed, id, title, userId } = todo

    const dispatch = useDispatch()

    const updateTodoHandler = () => {
        let title = prompt('Введите новый')
        if (title === null) title = ' '
        dispatch(todoRedThunks.updateTodo({ completed, id, title, userId }))
    }
    
    return <>
        <div className={css.todoContainer}>
            <div className={css.title}>{title}</div>
            {completed && <div>complited</div>}
            <div>{userId}</div>
            <button className={css.button}
                onClick={() => dispatch(todoRedThunks.deleteTodo(id))}
            >
                Delete
            </button>
            <button className={css.button}
                onClick={updateTodoHandler}
            >
                update
            </button>
        </div>
    </>
}