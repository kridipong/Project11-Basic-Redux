import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authenticate",
  initialState: { isLoggedIn: true },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
