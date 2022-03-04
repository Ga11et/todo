import { FC } from "react"
import css from './footer.module.css'

type FooterPropsType = {
    
}
export const Footer: FC<FooterPropsType> = ({  }) => {
    return <>
        <footer className={css.footer}>
            Created by Fyodor Sivkov 2022
        </footer>
    </>
}