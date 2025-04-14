
import './App.css'
import { Route,Routes } from 'react-router-dom'

import Header from "./components/Header"
import Menu from './components/Menu';
import Overview from './components/Overview'
import DetailedReport from './components/Detailedreport';
import Project from './Pages/Project'
import Teams from './Pages/Teams'
import Analytics from './Pages/Analytics'
import Integrations from './Pages/Integrations'
import Messages from './Pages/Message';


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
    <Overview/>
    <Routes>
    <Route path="/" element={<DetailedReport/>}/>
    <Route path='/projects' element={<Project/>} />
    <Route path='/teams' element={<Teams/>} />
    <Route path='/analytics' element={<Analytics/>}/>
    <Route path='/integrations' element={<Integrations/>}/>
    <Route path='/messages' element={<Messages/>}/>
   </Routes>
  
    </div>
   
  </div>
  )
}

export default App
