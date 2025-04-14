
import './App.css'
import { Route,Routes } from 'react-router-dom'

import Project from './Pages/Project'
import Teams from './Pages/Teams'
import Analytics from './Pages/Analytics'
import Integrations from './Pages/Integrations'
import Messages from './Pages/Message';
import Dashboard from './Pages/Dashboard';


function App() {

  return (
    <div >
    
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path='/projects' element={<Project/>} />
    <Route path='/teams' element={<Teams/>} />
    <Route path='/analytics' element={<Analytics/>}/>
    <Route path='/integrations' element={<Integrations/>}/>
    <Route path='/messages' element={<Messages/>}/>
   </Routes>
  
    
   
  </div>
  )
}

export default App
