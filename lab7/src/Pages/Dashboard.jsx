import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Content from '../components/Content'
import "../components/Dashboard.css"


export default function Dashboard() {
  
  return (
    
    <div className="container">
  <div className="header">
    <Header/>

  </div>
  <div className="menu">
    <Menu/>

  </div>
  <div className="content">
    <Content/>

  </div>
 
</div>

  )
}