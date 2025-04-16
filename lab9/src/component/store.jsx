import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import todoReducer from '../features/todoSlice';
import themeReducer from '../features/themeSlice';
import cartReducer from '../features/cartSlice';
import authReducer from '../features/authSlice';
import userReducer from '../features/fetchUsers';
import eventReducer from '../features/eventSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    users: userReducer,
    events: eventReducer,
  },
});

export default store;
