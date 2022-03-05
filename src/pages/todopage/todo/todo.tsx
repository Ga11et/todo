import { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { todoType } from "../../../store/models/models"
import { todoRedThunks } from "../../../store/reducers/todoReducer"
import css from './todo.module.css'
import {ReactComponent as OkeySVG} from '../../../assets/todospage/okey.svg'
import { useAppSelector } from "../../../hooks/hooks"

type TodoPropsType = {
    todo: todoType
}
export const Todo: FC<TodoPropsType> = ({ todo }) => {


    const { completed, id, title, userId } = todo

    const dispatch = useDispatch()
    const { isLoading, isDeleting } = useAppSelector(state => state.todoReducer)
    const updateTodoHandler = () => {
        let title = prompt('Введите новый')
        if (title === null) title = ' '
        dispatch(todoRedThunks.updateTodo({ completed, id, title, userId }))
    }
    const completeTodoHandler = () => {
        dispatch(todoRedThunks.updateTodo({ completed: true, id, title, userId }))
    }

    return <>
        <div className={css.todoContainer}>
            <div className={css.content}>
                {id}
                <div className={css.title}>{title}</div>
                <div className={css.buttons}>
                    <button className={css.button}
                        disabled={isDeleting.some( el => el === id)}
                        onClick={() => dispatch(todoRedThunks.deleteTodo(id))}
                    >
                        Удалить
                    </button>
                    <button className={css.button}
                        onClick={updateTodoHandler}
                    >
                        Обновить
                    </button>
                </div>
            </div>
            <div className={css.complited}>
                {completed ? <OkeySVG className={css.svg} />
                : isLoading.some( el => el === id) 
                    ? <div>loading</div>
                    : <button className={css.button}
                        onClick={completeTodoHandler}
                    >
                        Закончить
                    </button>
                }
            </div>
            
        </div>
    </>
}