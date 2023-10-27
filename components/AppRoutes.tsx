import React from 'react'
import {BrowserRouter,  Route, Router, Routes } from 'react-router-dom'
import Login from './Login/LoginMaster'

const AppRoutes = () => {
  return (
    <BrowserRouter >
        <Routes>
            <Route path='/' element={<Login/>}></Route>
        </Routes>

    </BrowserRouter>
  )
}   

export default AppRoutes