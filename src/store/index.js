// import { createStore } from "redux";

import {configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import counterSlice from "./counter";


const store = configureStore({ reducer: {counter: counterSlice.reducer, auth:authSlice.reducer }});


export default store;

// const store = createStore(counterSlice.reducer);
// insteaad of createStore(counterSlice.reducer) if we have more slicer we could use

// const store = configureStore({
//   reducer: {counter: counterSlice.reducer,..}
// });

// const counterReducer = (state = { counter: 0, show: true }, action) => {
//   if (action.type === "INCREMENT") {
//     return { counter: state.counter + 1, show: state.show };
//   }
//   if (action.type === "DECREMENT") {
//     return { counter: state.counter - 1, show: state.show };
//   }

//   if (action.type === "INCREASE") {
//     return { counter: state.counter + action.amount, show: state.show };
//   }

//   if (action.type === "TOGGLE") {
//     return { counter: state.counter, show: !state.show };
//   }

//   return state;
// };

// const store = createStore(counterReducer);
