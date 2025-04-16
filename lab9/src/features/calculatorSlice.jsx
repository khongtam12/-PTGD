export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
      input: {},
      result: null,
    },
    reducers: {
      updateInput: (state, action) => {
        state.input = { ...state.input, ...action.payload };
      },
      calculateResult: (state) => {
        const { weight, height } = state.input;
        if (weight && height) {
          state.result = (weight / (height * height)).toFixed(2); // BMI
        }
      },
    }
  });
  
  export const { updateInput, calculateResult } = calculatorSlice.actions;