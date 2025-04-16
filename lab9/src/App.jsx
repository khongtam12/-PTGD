import React from 'react';
import { useState } from 'react';
import Counter from './pages/Counter';
import TodoList from './pages/TodoList';
import ThemeSwitcher from './pages/ThemeSwitcher';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import UserFetcher from './pages/UserFetcher';
import { useSelector, useDispatch } from 'react-redux';  // Import useSelector và useDispatch

import EventManager from './pages/EventManager';
import './App.css';

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`app ${theme}`} style={{ padding: 20 }}>
      <h1>Redux Toolkit App</h1>
      {/* <ThemeSwitcher /> */}
      {/* <Auth /> */}
      <hr />
      {/* <Counter /> */}
      <TodoList />
      {/* <Cart /> */}
      {/* <UserFetcher /> */}
      {/* <EventManager /> */}
    </div>
  );
}

export default App;

 

