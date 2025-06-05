import React, { useEffect, useState } from 'react'
import NewTask from '../component/todo/NewTask'
import ToDoItem from '../component/todo/ToDoItem'
import useTodoStore from '../store/useTodoStore'
import todoApi from '../api/todoApi'
import * as Yup from "yup"
import { schemaTodo } from '../schemas/schemaTodo'

const initialInput = {
  taskName: "",
  userId: 25,
}

function ToDoList() {
  const actionGetTodo = useTodoStore((state) => state.actionGetTodo)

  useEffect(() => {
    actionGetTodo()
  }, [])

  const [input, setInput] = useState(initialInput)
  const [inputError, setInputError] = useState(initialInput)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      console.log(input)

      const res = await todoApi.createTodo(input)
      console.log("res", res.data)

      schemaTodo.validateSync(input, { abortEarly: false })

      setInput(initialInput)
      actionGetTodo()

      alert("Success!!")
    } catch (error) {
      console.log(error)
      alert("Create todo invalid!!")

      if (error instanceof Yup.ValidationError) {
        const err = error.inner.reduce((acc, cur) => {
          acc[Currency.path] = cur.message
          return acc
        }, {})
        setInputError(err)
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col background-color: var(--color-black) items-center justify-center p-4 text-white">
      <div className="bg-gray-800 shadow-xl rounded-2xl w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">My Todo List</h1>
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            type="text"
            name="taskName"
            onChange={handleChange}
            value={input.value}
            placeholder='task'
            className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type='submit' className="bg-sky-500/50 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">send</button>
        </form>
        <ToDoItem />
      </div>
    </div>
  )
}

export default ToDoList