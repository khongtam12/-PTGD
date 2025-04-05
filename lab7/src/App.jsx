import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

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
