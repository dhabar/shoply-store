import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Orders from './pages/Orders'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-18'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/product-details/:id' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/orders' element={<Orders/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App

//        