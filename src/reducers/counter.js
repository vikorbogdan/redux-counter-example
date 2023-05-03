import { createAction, createReducer } from "@reduxjs/toolkit";

// Action creators
const increment = createAction("counter/increment"); // a paraméterként átadott érték automatikusan payloadba kerül
const decrement = createAction("counter/decrement");

// Reducer
// Az immer miatt object a state
const initialState = { value: 0 };

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      if (action.payload) {
        state.value += action.payload;
      } else {
        state.value++;
      }
    })
    .addCase(decrement, (state, action) => {
      if (action.payload) {
        state.value -= action.payload;
      } else {
        state.value--;
      }
    });
});
export { increment, decrement };
export default counterReducer;
