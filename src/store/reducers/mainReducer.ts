import { actionsTypes } from "../models/models"
import todoPNG from '../../assets/mainpage/todo.png'

const initialState = {
    heading: 'Todo',
    text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."',
    image: todoPNG

}

type initialStateType = typeof initialState
export const mainReducer = (state = initialState, action: actionsTypes<typeof mainRedAction>): initialStateType => {
    switch (action.type) {
        
        default:
            return state
    }
}

export const mainRedAction = {

}