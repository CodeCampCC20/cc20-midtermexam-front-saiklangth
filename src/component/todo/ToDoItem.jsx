import React, { useState } from 'react'

function ToDoItem(props) {
  const { item: { id, title, date }, idx } = props
  return (
    <>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">To Do List</li>
        <li className="list-row">
          <div className='h-6 w-6 rounded-full shadow-sm text-white bg-white text-center content-center'>{idx+1}</div>
          <div>
            <p className='font-semibold'>{title}</p>
            <p>{date}</p>
          </div>
          <button className="btn btn-square btn-ghost">X</button>
        </li>
      </ul>
      <dialog>
        <form className='rounded-md w-[480px] text-center'></form>
      </dialog>
    </>
  )
}

export default ToDoItem