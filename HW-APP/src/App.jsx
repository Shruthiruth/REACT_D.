// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Home from './components/Home'
import FetchAllProduct from './components/Product/FetchAllProduct'
import ProductDetails from './components/Product/ProductDetails'
import AddProductForm from './components/Product/AddProductForm'
import EditProductForm from './components/Product/EditProductForm'
import BookList from './components/Book/BookList'
import BookItem from './components/Book/BookItem'
import BookForm from './components/Book/BookForm'
import BlogList from './components/Blog/BlogList'
import NewBlogPost from './components/Blog/NewBlogPost'
import BlogPost from './components/Blog/BlogPost'
import Navigation from './components/Blog/Navigation'

function App() {
   

  return (
    <>
    <div>HW APP</div>


     
      <Router >
        <Routes>
          <Route path='/Cart'  element={<Cart/>} > </Route>
          <Route path='/'  element={<Home/>} > </Route>
          <Route path='/AllProduct' element={<FetchAllProduct/>}></Route>
          <Route path='/PDetails/:id' element={<ProductDetails/>}></Route>
          <Route path='/AddProduct' element={<AddProductForm/>}></Route>
          <Route path='/EditProduct/:id' element={<EditProductForm/>}></Route>
          <Route path='/BookList' element={<BookList/>}></Route>
           <Route path='/BookForm' element={<BookForm/>}></Route>
          <Route path='/BookItem/:id' element={<BookItem/>}></Route>
          <Route path='/BlogList' element={<><Navigation/><BlogList/></>}></Route>
          <Route path='/NewBlogPost' element={<><Navigation/><NewBlogPost/></>}></Route>
          <Route path='/BlogPost/:id' element={<><Navigation/><BlogPost/></>}></Route>
        \
        </Routes>
      </Router>
        
    </>
  )
}

export default App
