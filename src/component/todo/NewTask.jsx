import React, { useRef } from 'react'

function NewTask({addTask}) {
  const title = useRef()
  const form = useRef()

  const submitForm = (e) => {
    e.preventDefault()
    const task ={
      title: title.current.value,
      date: new Date().toLocaleString()
    }
    addTask(task)
    form.current.reset()
  }

  return (
    <form>
      <label htmlFor="title" className='text-lg text-gray-400'>Add New Task</label>
      <div>
        <input
          type="text"
          id="title"
          placeholder='กรอกข้อความ'
          className='border'
        />
        <button type='submit' className='w-40 px-3 py-2 rounded font-semibold text-white'>+New</button>
      </div>
    </form>
  )
}

export default NewTask