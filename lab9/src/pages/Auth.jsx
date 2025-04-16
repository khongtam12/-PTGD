import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/authSlice';

const Auth = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const [username, setUsername] = useState('');

  return (
    <div>
      <h2>Auth</h2>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          <button onClick={() => dispatch(login({ username }))}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Auth;