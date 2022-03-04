import { FC } from "react"
import { Link } from "react-router-dom"
import css from './header.module.css'

type HeaderPropsType = {
    
}
export const Header: FC<HeaderPropsType> = ({  }) => {
    return <>
        <header className={css.header}>
            <div className={css.logo}>
                Todo
            </div>
            <nav className={css.nav}>
                <Link to={'./main'} className={css.link} >Главная</Link>
                <Link to={'./todos'} className={css.link} >Todos</Link>
            </nav>
        </header>
    </>
}