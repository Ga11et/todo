type actionType<T> = T extends {[key: string]: infer U} ? U : never
export type actionsTypes<T extends {[key: string]: (...args: Array<any>) => any}> = ReturnType<actionType<T>> 

export type todoType = {
    id: number
    title: string
    completed: string
    userId: number
}