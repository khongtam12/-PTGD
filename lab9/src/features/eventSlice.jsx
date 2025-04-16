import { createSlice } from '@reduxjs/toolkit';

let nextId = 1;

const eventSlice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {
    addEvent: (state, action) => {
      state.push({ id: nextId++, ...action.payload });
    },
    editEvent: (state, action) => {
      const index = state.findIndex(e => e.id === action.payload.id);
      if (index !== -1) state[index] = { ...state[index], ...action.payload };
    },
    deleteEvent: (state, action) => {
      return state.filter(e => e.id !== action.payload);
    },
  },
});

export const { addEvent, editEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
