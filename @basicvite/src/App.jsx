import { useState } from 'react'
import './App.css'

const App = () => {
  const [item, setItem] = useState("");
  const [todos, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodo(currentTodos => {
      return [
        ...currentTodos, { id: crypto.randomUUID(), title: item, completed: false },

      ]
    })
    setItem('')
  }
  function toggleTodo(id, completed){
    setTodo(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return{...todo, completed}
        }
        return todo
      })
    })

  }
  function deleteTodo(id) {
    setTodo(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input
            onChange={e => setItem(e.target.value)}
            value={item}
            type='text'
            id='item' />
        </div>
        <button className='btn'>Add</button>

      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type='checkbox' checked={todo.completed}
                  onChange={e => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}

              </label>
              <button onClick={()=>deleteTodo(todo.id)}className='btn btn-danger'>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )


}


export default App
