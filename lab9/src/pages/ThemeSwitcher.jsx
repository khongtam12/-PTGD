import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/themeSlice'; // Đảm bảo bạn đã import đúng action

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme (Current: {theme})
      </button>
    </div>
  );
};

export default ThemeSwitcher;
