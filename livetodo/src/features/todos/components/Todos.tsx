import React, { useState } from 'react'
import { Todo } from './Todo'
import { ITodo } from '../types'

export const Todos = () => {
    const [todos, setTodos] = useState<Array<ITodo>>([])
    const [newTodoName, setNewTodoName] = useState("")

    const addTodo = () => {
        setTodos([...todos, { id: String(Math.random() * 1000) + Date.now(), name: newTodoName }])
        setNewTodoName("")
    }

    const removeTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const completeTodo = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, complete: true } : todo))
    }

    return (
        // NOT THE BEST APPROACH, BUT WHAT TO DO?
        // I'd use context instead, but I am limited on time now xD
        <div style={{ display: 'flex', flexDirection: 'column' }}>{todos.map(todo => <Todo {...todo} removeTodo={removeTodo} completeTodo={completeTodo} />)}
            <input value={newTodoName} onChange={(event) => {
                setNewTodoName(event.target.value)
            }} />
            <button onClick={(event) => {
                event.preventDefault()
                addTodo()
            }}>create todo</button>
        </div>

    )
}
