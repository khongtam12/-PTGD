
import './App.css'
import Header from "./components/Header"
import Menu from './components/Menu';
import Overview from './components/Overview'



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
     
  
    </div>
   
  </div>
  )
}

export default App
