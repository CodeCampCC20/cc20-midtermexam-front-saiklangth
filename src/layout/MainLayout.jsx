import React from 'react'
import NavBar from '../component/NavBar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='h-screen'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default MainLayout