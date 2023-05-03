import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      if (action.payload) {
        state.value += action.payload;
      } else {
        state.value++;
      }
    },
    decrement: (state, action) => {
      if (action.payload) {
        state.value -= action.payload;
      } else {
        state.value--;
      }
    },
  },
});
export default counterSlice;
export const { increment, decrement } = counterSlice.actions;
