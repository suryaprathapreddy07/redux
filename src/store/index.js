// import { createStore, getState } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
