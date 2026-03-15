// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Counter from './features/counter/Counter'
import ProductList from './features/product/ProductList'
import AddForm from './features/product/AddForm'
import EditForm from './features/product/EditForm'
import Register from './features/auth/Register'
import Login from './features/auth/Login'
import Dashboard from './pages/Dashboard'

function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/product/list' element={<ProductList />}></Route>
        <Route path='/product/add' element={<AddForm />}></Route>
        <Route path='/product/:id' element={<EditForm />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>

    </>
  )
}

export default App
