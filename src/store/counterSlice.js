import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, isCounterShown: true };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    increase(state, actions) {
      state.count = state.count + actions.payload;
    },
    toggle(state) {
      state.isCounterShown = !state.isCounterShown;
    },
  },
});

export default counterSlice;
