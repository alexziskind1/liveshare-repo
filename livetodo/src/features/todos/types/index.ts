export interface ITodo {
    id: string;
    name: string;
    complete?:boolean
}


export interface TodoProps extends ITodo {
    removeTodo: (id: string) => void
    completeTodo:(id:string) => void
}