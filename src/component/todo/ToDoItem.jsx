import React, { useState } from 'react'
import useTodoStore from '../../store/useTodoStore'
import todoApi from '../../api/todoApi'
import NewTask from './NewTask'

function ToDoItem() {
  const todos = useTodoStore((state) => state.todos)
  const actionGetTodo = useTodoStore((state) => state.actionGetTodo)
  console.log('todos', todos)

  const handleDelete = async (id) => {
    try {
      await todoApi.deleteTodo(id, 25)
      actionGetTodo()

      alert('delete success!!')
    } catch (error) {
      console.log(error)
      alert('delete invalid!!')
    }
  }
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-inner flex flex-col">
      {/* <h2 className="text-lg font-semibold text-white mb-2">Tasks</h2> */}
      <div className="flex flex-col gap-2">
        {todos.map((item) => (
          <NewTask
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            actionGetTodo={actionGetTodo}
          />
        ))}
      </div>
    </div>
  )
}

export default ToDoItem