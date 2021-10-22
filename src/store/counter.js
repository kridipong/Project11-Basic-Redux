import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0, show: true },
    reducers: {
      decrement(state) {
        state.counter--;
      },
      increment(state) {
        state.counter++;
      },
      increase(state, action) {
        state.counter = state.counter + action.payload;
      },
      toggleCounter(state) {
        state.show = !state.show;
      },
    },
  });
  export const counterActions = counterSlice.actions;
  export default counterSlice;