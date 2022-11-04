import React from 'react'
import { TodoProps } from '../types'

export const Todo = ({ id, name, complete, removeTodo, completeTodo }: TodoProps) => {

    return (
        <div>{name}
            <button onClick={(event) => {
                event.preventDefault()
                removeTodo(id)
            }}>❌</button>
            <button onClick={(event) => {
                event.preventDefault()
                completeTodo(id)
            }} >✔️</button></div>
    )
}
