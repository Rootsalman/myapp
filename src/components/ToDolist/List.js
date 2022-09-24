import React, { useState } from 'react'
import Form1 from './Form1'

function List() {
    const [toDos, setTodos] = useState([])
    const addtodo = (todo) => {
        const todoCopy = [...toDos]
        todoCopy.push(todo)
        setTodos(todoCopy);
        console.log(toDos)
    }
    const markascompleted = (name) => {
        const idx = toDos.findIndex(todo => todo.name
            === name)
        const todoCopy = [...toDos];
        todoCopy[idx].completed = !todoCopy[idx].completed;
        setTodos(todoCopy);
    }
    return (
        <div>
            <div>
                {
                    toDos.map((todo) => {
                        return (
                            <p key={todo.name} onClick={() =>
                                markascompleted(todo.name)}
                                className={todo.completed ?
                                    "strike" : ""}
                            >
                                {todo.name}</p>
                        )
                    })
                }
            </div>
            <Form1 onAddToDoCallback={addtodo} />
        </div>
    )
}

export default List
