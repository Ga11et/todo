import { useState } from 'react'
import css from './paginator.module.css'

type propsType = {
    countPages: number
    countPeopleOnPage: number
    activePage: number

    onNumberPageClick: (pageNumber: number) => void
}

export const PaginatorScript: React.FC<propsType> = (props) => {

    const count = Math.ceil(props.countPages / props.countPeopleOnPage)
    const numbersOnOnePage = 10

    let [currentNumbersPage, setCurrentNumbersPage] = useState(1)
    let firstPage = (currentNumbersPage - 1) * numbersOnOnePage + 1
    let lastPage = firstPage + numbersOnOnePage
    let numbers: Array<number> = []
    for (let i = 1; i <= count; i++) numbers[i] = i
    const numbersJsx = numbers
        .filter(el => el >= firstPage && el <= lastPage)
        .map(el => <div key={el}
            onClick={() => props.onNumberPageClick(el)}
            className={`${css.numberPage} ${props.activePage === el ? css.active : css.noactive}`}>{el}</div>)

    return (
        <div className={css.item}>
            {currentNumbersPage > 1 && <button
                onClick={() => setCurrentNumbersPage(currentNumbersPage - 1)} >-</button>}
            {numbersJsx}
            {currentNumbersPage < count / numbersOnOnePage && <button
                onClick={() => setCurrentNumbersPage(currentNumbersPage + 1)} >+</button>}
        </div>
    )
}