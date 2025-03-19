import { useState } from 'react'
// import {Routers, Router} from 'react-router-dom'
import './App.css'
import Headers from './Component/Header'
import Footer from './Component/Footer'
import MenuList from './Component/MenuList'
import Home from './Home'
import BookTable from './Component/BookTable'
function App() {

  return (
    <>
    <Headers/>
    <MenuList/>
    <BookTable/>
    <Footer/>

    
     
    </>
  )
}

export default App
