// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Home from './components/Home'

function App() {
   

  return (
    <>
    <div>HW APP</div>
     
      <Router>
        <Routes>
          <Route path='/Cart'  element={<Cart/>} > </Route>
          <Route path='/'  element={<Home/>} > </Route>
        </Routes>
      </Router>
        
    </>
  )
}

export default App
