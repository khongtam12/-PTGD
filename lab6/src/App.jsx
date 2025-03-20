import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './Component/Header';
// import Footer from './Component/Footer'
// import MenuList from './Component/MenuList'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';

function App() {
  return (
    <Router>
      {/* Header xuất hiện trên mọi trang */}

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer có thể đặt ở đây nếu cần xuất hiện trên mọi trang */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
