import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import ProductList from './features/products/productList'
import Login from './features/auth/Login'
import AdminDb from './pages/AdminDb'
import UserDb from './pages/UserDb'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './app/PrivateRoute.jsx'
import Logout from './features/auth/Logout.jsx'
import ProductDetails from './features/products/ProductDetails.jsx'
function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/' element={<h1>Welcome to DirectBuy</h1>} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<AdminDb />} />
          <Route path='/user' element={<UserDb />} />
          <Route path='/dashboard' element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />

          <Route path='/logout' element={<Logout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
