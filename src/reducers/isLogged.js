import { createAction, createReducer } from "@reduxjs/toolkit";

const signIn = createAction("isLogged/signIn");

const initialState = { value: false };
const isLoggedReducer = createReducer(initialState, (builder) => {
  builder.addCase(signIn, (state, action) => {
    state.value = !state.value;
  });
});
export { signIn };
export default isLoggedReducer;
