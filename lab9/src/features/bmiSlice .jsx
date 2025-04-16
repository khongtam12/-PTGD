// bmiSlice.js
import { createSlice } from '@reduxjs/toolkit'

const bmiSlice = createSlice({
  name: 'bmi',
  initialState: { height: '', weight: '', result: '' },
  reducers: {
    updateInput: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    calculateResult: (state) => {
      const h = parseFloat(state.height) / 100;
      const w = parseFloat(state.weight);
      state.result = h && w ? (w / (h * h)).toFixed(2) : '';
    }
  }
})

export const { updateInput, calculateResult } = bmiSlice.actions
export default bmiSlice.reducer
