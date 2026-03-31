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
import AddProduct from './features/products/AddProduct.jsx'
import EditProduct from './features/products/EditProduct.jsx'
import CartPage from './features/cart/CartPage.jsx'
import MyOrders from './features/orders/MyOrders.jsx'
function App() {


  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Toaster position='top-center' reverseOrder={false} />
          <Routes>
            <Route path='/' element={<HomeRoute />} />
            <Route path='*' element={<NotFound />} />

            <Route path='/products' element={<ProductList />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/product/edit/:id' element={
              <PrivateRoute role='ADMIN'><EditProduct /></PrivateRoute>} />

            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<AdminDb />} />
            <Route path='/user' element={<UserDb />} />
            <Route path='/dashboard' element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path='/products/add' element={
              <PrivateRoute role='ADMIN'><AddProduct /></PrivateRoute>} />

            <Route path='/logout' element={<Logout />} />
            <Route path='/cart' element={
              <PrivateRoute role='USER'>
                <CartPage />
              </PrivateRoute>
            } />

            <Route path='/orders' element={
              <PrivateRoute role='USER'>
                <MyOrders />
              </PrivateRoute>
            } />

          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
