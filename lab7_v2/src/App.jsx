import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Menu from './components/Menu';


function App() {

  return (
    <div className="container">
    <div className="header">
    <Header/>
  
    </div>
    <div className="menu">
    <Menu/>
  
    </div>
    <div className="content">
     
  
    </div>
   
  </div>
  )
}

export default App
