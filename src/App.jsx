import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from "./components/Home" 
// import Cric from "./components/Cric"
import Register from './components/Register'


function App() {

  return (
    <div className="App-Container">
      <h1 style={{ backgroundColor: "orange" }}>MERN Frontend</h1>
      {/* <Home/>
      <Cric /> */}
      <Register/>
      <h3>This is footer</h3>
    </div>
  )
}

export default App
