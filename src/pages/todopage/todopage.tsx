import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { PaginatorScript } from "../../components/paginator/paginator"
import { useAppSelector } from "../../hooks/hooks"
import { todoRedActions, todoRedThunks } from "../../store/reducers/todoReducer"
import { Todo } from "./todo/todo"
import css from './todopage.module.css'

type TodoPagePropsType = {

}
export const TodoPage: FC<TodoPagePropsType> = ({ }) => {

    const dispatch = useDispatch()
    const { todos, activePage } = useAppSelector(state => state.todoReducer)

    const createTodoHandler = () => {
        let title = prompt('Введите Todo')
        if (title === null) title = ''
        dispatch(todoRedThunks.addTodo({ title, userId: 1, completed: false, id: todos.length + 1 }))
    }

    const changeActivePageHundler = (newActivePage: number) => {
        dispatch(todoRedActions.changeActivePage(newActivePage))
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
            <PaginatorScript 
                activePage={activePage}
                countPages={todos.length}
                countPeopleOnPage={20}
                onNumberPageClick={changeActivePageHundler}
            />
            <div className={css.todos}>
                {todos.map(el => {
                    if (el.id > todos.length - 20*activePage && el.id <= todos.length - 20*(activePage - 1)) {
                        return <Todo key={el.id} todo={el} />
                    }
                    })    
                }

            </div>
            <PaginatorScript 
                activePage={activePage}
                countPages={todos.length}
                countPeopleOnPage={5}
                onNumberPageClick={changeActivePageHundler}
            />
        </main>
    </>
}