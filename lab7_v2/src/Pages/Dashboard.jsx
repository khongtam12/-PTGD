import React from 'react';
import './Dashboard.css'

import Header from "../components/Header"
import Menu from '../components/Menu';
import Overview from '../components/Overview'
import Detailedreport from "../components/Detailedreport";



function Dashboard() {

  return (
    <div className="container">
    <div className="header">
    <Header/>
  
    </div>
    <div className="menu">
    <Menu/>
  
    </div>
    <div className="content">
    <Overview/>
    <Detailedreport/>
  
    </div>
   
  </div>
  )
}

export default Dashboard
