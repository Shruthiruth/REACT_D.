// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import FetchAllPost from './components/FetchAllPOst'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import PostDetails from './components/PostDetails'
import ContactForm from './components/ContactForm'

function App() {


  return (
    <>
        <div>AS APP</div>
        {/* <Counter/>
        <FetchAllPost/> */}
       
        <Router>
          <Routes>
            <Route path='/Counter' element=<Counter/>  > </Route>
             <Route path='/FetchAllPost' element=<FetchAllPost/>  > </Route>
             <Route path='/PostDetails/:pid' element=<PostDetails/>  > </Route>
             <Route path='/ContactForm' element=<ContactForm/>  > </Route>
            <Route path='/' element=<Home/> ></Route>
          </Routes>
        </Router>

    </>
  )
}

export default App
