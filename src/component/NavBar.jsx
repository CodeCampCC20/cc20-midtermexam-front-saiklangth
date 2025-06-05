import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar bg-base-100 shadow-sm'>
      <NavLink className={"btn btn-ghost text-xl"} to='/'>Login</NavLink>
      <NavLink className={"btn btn-ghost text-xl"} to='/todolist'>ToDoList</NavLink>
      <NavLink className={"btn btn-ghost text-xl"} to='/movie'>Movie</NavLink>
    </nav>
  )
}

export default NavBar