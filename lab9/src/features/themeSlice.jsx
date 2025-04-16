import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',  // Mặc định theme là 'light'
  reducers: {
    toggleTheme: (state) => {
      // Trả về một giá trị mới thay vì thay đổi giá trị cũ
      return state === 'light' ? 'dark' : 'light';
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
