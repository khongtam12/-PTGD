// advancedCounterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const advancedCounter = createSlice({
  name: 'advancedCounter',
  initialState: { count: 0 },
  reducers: {
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    reset: (state) => {
      state.count = 0;
    }
  }
})

export const { incrementByAmount, reset } = advancedCounter.actions
export default advancedCounter.reducer
