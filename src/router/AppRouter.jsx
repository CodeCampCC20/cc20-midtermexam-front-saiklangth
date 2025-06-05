import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import ToDoList from '../pages/ToDoList'
import LoginPage from '../pages/LoginPage'
import Movies from '../pages/Movies'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<LoginPage />} />
          <Route path='todolist' element={<ToDoList />} />
          <Route path='movie' element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter