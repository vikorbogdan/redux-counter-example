import { createSlice } from "@reduxjs/toolkit";

const isLoggedSlice = createSlice({
  name: "isLogged",
  initialState: {
    value: false,
  },
  reducers: {
    signIn: (state) => {
      state.value = !state.value;
    },
  },
});

export default isLoggedSlice;
export const { signIn } = isLoggedSlice.actions;
