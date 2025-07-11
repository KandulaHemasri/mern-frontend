import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import Product from './components/Product'
import Cart from './components/Cart'
import Admin from './components/Admin'
import Login from './components/Login'
import Order from './components/Order'
import Orders from './components/Orders'
import Users from './components/Users'
import Products from './components/Products'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'

function App() {

  return (
    <div className="App-Container">

      <BrowserRouter>
      <h1 style={{ backgroundColor: "orange" }}>MERN Frontend</h1>

      <Link to="/">Home</Link>
      <Link to="/cart">My Cart</Link>
      <Link to="/order">Order</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/login">Login</Link>

      <Routes>

        <Route index element={<Product/>}/>
        <Route path="/" element={<Product/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="order" element={<Order/>}/>

        <Route path="admin" element={<Admin/>}>
          <Route index element={<Users/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="orders" element={<Orders/>}/>
        </Route>

      </Routes>

      <h3>This is footer</h3>
      </BrowserRouter>
    </div>
  )
}

export default App
