import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
// impot pages for routes
import Home from "./pages/home/Home"
import Cart from './pages/cart/Cart'
import PlaceOrder from "./pages/placeOrder/PlaceOrder"
// Immport react routes
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className="app">
    <Navbar />
    <Routes>
<Route path='/' element={<Home/>} />
<Route path='/cart' element={<Cart/>} />
<Route path='/order' element={<PlaceOrder/>} />
    </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
