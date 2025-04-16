import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ThemeSwitcher from './pages/ThemeSwitcher';
import Counter from './pages/Counter';
import TodoList from './pages/TodoList';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import UserFetcher from './pages/UserFetcher';
import EventManager from './pages/EventManager';
import './App.css';

function App() {
  const theme = useSelector((state) => state.theme); // Lấy theme từ Redux store
  const [activePage, setActivePage] = useState('home'); // Trạng thái để chọn trang

  // Cập nhật theme cho toàn bộ body
  useEffect(() => {
    document.body.className = theme; // Thêm class 'light' hoặc 'dark' vào body
  }, [theme]);

  // Hàm render các component
  const renderPage = () => {
    switch (activePage) {
      case 'counter':
        return <Counter />;
      case 'todo':
        return <TodoList />;
      case 'cart':
        return <Cart />;
      case 'auth':
        return <Auth />;
      case 'userFetcher':
        return <UserFetcher />;
      case 'eventManager':
        return <EventManager />;
      default:
        return <h2>Welcome to Redux Toolkit App</h2>;
    }
  };

  return (
    <div className="app" style={{ padding: 20 }}>
      <h1>Redux Toolkit App</h1>
      <ThemeSwitcher /> {/* Component chuyển đổi theme */}
      <div className="nav">
        <button onClick={() => setActivePage('counter')}>Counter</button>
        <button onClick={() => setActivePage('todo')}>Todo List</button>
        <button onClick={() => setActivePage('cart')}>Cart</button>
        <button onClick={() => setActivePage('auth')}>Auth</button>
        <button onClick={() => setActivePage('userFetcher')}>User Fetcher</button>
        <button onClick={() => setActivePage('eventManager')}>Event Manager</button>
      </div>
      <hr />
      {renderPage()} {/* Hiển thị trang tương ứng */}
    </div>
  );
}

export default App;
