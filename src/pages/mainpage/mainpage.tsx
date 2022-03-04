import { FC } from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../hooks/hooks"
import css from './mainpage.module.css'

type MainPropsType = {
    
}
export const MainPage: FC<MainPropsType> = ({  }) => {

    const { heading, text, image } = useAppSelector( store => store.mainReducer)


    return <>
        <main className={css.mainPage}>
            <div className={css.content}>
                <h1 className={css.heading}>{heading}</h1>
                <p className={css.paragraph}>
                    {text}
                </p>
                <Link to={'../todos'} className={css.link}>Todos {">>>"}</Link>
            </div>
            <div className={css.forImage}>
                <img alt="todo" src={image} className={css.image} />
            </div>
        </main>
    </>
}