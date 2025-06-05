import React, { useRef, useState } from 'react'
import todoApi from '../../api/todoApi'

function NewTask({item, actionGetTodo, handleDelete}) {
  const [input, setInput] = useState({
    complete: item.complete || false,
    taskName: item.taskName || "",
  })

  const handleChange = async (e) => {
    try {
      const {checked} = e.target
      console.log('checked', checked)
      const data = {
        completed: checked,
        taskName: item.taskName,
      }
      await todoApi.updateTodo(item.id, 25, data)
      actionGetTodo()

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex items-center justify-between bg-gray-700 text-white p-3 mb-2 rounded-lg shadow-md">
      <div className="flex items-center gap-3">
        <input type="checkbox" checked={item.complete} onChange={handleChange} className="w-5 h-5 accent-blue-500" />
        <p className={`${item.completed ? "line-through text-gray-400" : "text-white"} text-base`}>{item.taskName}</p>
      </div>
      <p onClick={()=>handleDelete(item.id)}  className="cursor-pointer text-red-400 hover:text-red-500">X</p>
    </div>
  )
}

export default NewTask