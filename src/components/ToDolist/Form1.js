import React from 'react'
import { useState } from 'react';
function Form1(props) {
  const [todo, setTodo] = useState({
    name: "", completed: false
  });
  const handleSubmit = (n) =>{
    n.preventDefault();
    props.onAddToDoCallback(todo);
    setTodo({name: "",completed: false})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>your name</label>
        <input type='text' value={todo.name} placeholder="Enter a Todo" onChange={(n) =>
           setTodo({ name: n.target.value, completed: false })}></input><br></br>
        <button>ADD ITEM</button>
      </form>
    </div>
  )
}

export default Form1