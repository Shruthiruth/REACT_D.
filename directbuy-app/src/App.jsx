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
import { AuthProvider } from './app/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import NotFound from './pages/NotFound.jsx'
import HomeRoute from './routes/HomeRoute.jsx'
function App() {


  return (
    <>
    <AuthProvider>
      <Router>
        <Navbar />
        <Toaster position='top-center'  reverseOrder={false} />
        <Routes>
        <Route path='/' element={<HomeRoute/>} />
        <Route path='*' element={<NotFound/>} />
        
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDetails />} />
         
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
      </AuthProvider>
    </>
  )
}

export default App
