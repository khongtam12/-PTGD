
import './App.css'
import Header from "./components/Header"
import Menu from './components/Menu';
import Overview from './components/Overview'
import DetailedReport from './components/Detailedreport';


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
     <DetailedReport/>
  
    </div>
   
  </div>
  )
}

export default App
