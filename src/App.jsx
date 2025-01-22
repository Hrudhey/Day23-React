import React from 'react'
import Login from './components/Login'
import './App.css'
import Register from './components/Register'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/register' element={<Register/>}></Route>
   </Routes>
   
   </>
  )
}

export default App