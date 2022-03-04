import { todoReducer } from './reducers/todoReducer';
import { mainReducer } from './reducers/mainReducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

let reducers = combineReducers({
    mainReducer,
    todoReducer
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers, applyMiddleware(thunk))

export default store