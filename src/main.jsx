import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice.js";
import isLoggedSlice from "./features/counter/isLoggedSlice.js";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, isLogged: isLoggedSlice.reducer },
});
store.subscribe(() => console.log(store.getState()));
// store.dispatch({ type: "INCREMENT" });
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
