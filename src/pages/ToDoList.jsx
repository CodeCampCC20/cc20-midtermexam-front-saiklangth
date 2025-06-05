import React, { useState } from 'react'
import NewTask from '../component/todo/NewTask'
import ToDoItem from '../component/todo/ToDoItem'

function ToDoList() {
  const [todos, setToDos] = useState([])

  const addTask = (task) => {
    setToDos((prev) => [...prev, task])
  }

  return (
    <>
      <NewTask addTask={addTask} />
      <ul>
        {todos.map((el, index) => (
          <ToDoItem key={el.id} idx={index} item={el} />
        ))}
      </ul>
    </>
  )
}

export default ToDoList