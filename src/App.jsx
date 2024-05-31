import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
// impot pages for routes
import Home from "./pages/home/Home"
import Cart from './pages/cart/Cart'
import PlaceOrder from "./pages/placeOrder/PlaceOrder"
// Immport react routes
import { Route, Routes } from 'react-router-dom'
import LoginPopUp from './components/loginPopUp/LoginPopUp'

const App = () => {
  
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    { showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></> }
      <div className="app">
    <Navbar setShowLogin={setShowLogin} />
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
