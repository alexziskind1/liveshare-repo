import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

type TodoItem = {
  id: string,
  title: string,
  done: boolean
}

let id = 0
const getId = () => {
  return (++id).toString()
}

/**
 *  The monster
 */ 
function App() {
  const [items, setItems] = React.useState<TodoItem[]>([])

  const addTodo = (todo: TodoItem) => {
    setItems(items => [todo].concat(items))
  }

  const removeTodo = (id: string) => {
    setItems(items => items.filter(x => x.id !== id))
  }

  const toggleDone = (id: string) => {
    setItems(items => items.map(x => x.id === id ? {...x, done: !x.done} : x))
  }

  const renameTodo = (id: string, name: string) => {
    setItems(items => items.map(x => x.id === id ? {...x, title: name} : x))
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const title = formData.get('todo-name')?.toString().trim()
    const id = getId()
    if (title) {
      addTodo({
        done: false,
        id,
        title
      })
    }
    e.currentTarget.reset()
  }

  return (
    <div className="App">
      <header className="App-header">
        The BEST Todo List 
      </header>




        {/* Body inside body? */}
        {/* It is a possession */}
        {/* We are not working */}
          <h1>Are we bulding a Monster?</h1>
          <h1>This is just 4 funs.</h1>
          <h1>Have fun.</h1>
          
          <h1>DO NOT TOUCH THE RED BUTTON</h1>
          
                 <h3>Everybody wants to rule the world  </h3>
                 
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="todo-name">Add todo item</label>
            <br />
            <input type="text" name="todo-name" id="todo-name" placeholder='What to do?' />
            <button type="submit">Add</button>
          </form>
          
          <hr />

          {items.length === 0 && <div>Add your first todo!</div>}
          {items.map((item) => {
              // This is where the items will load
              // change class if state is done
              // LOVE THE CHANGE ✔️ a lot better that Done and remove
              return (
                  <div style={{textDecoration: item.done ? 'line-through' : 'none'}}>
                    {item.title}
                    <button type="button" onClick={() => toggleDone(item.id)}>
                    ✔️
                    </button>
                    <button type="button" onClick={() => removeTodo(item.id)}>
                    ❌
                    </button>
                  </div>
              );
          })}       

    </div>
  );
}

export default App;
