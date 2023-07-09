import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  method: "signup",
  open: 0,
};

export const authModalSlice = createSlice({
  name: "authModalSlice",
  initialState,
  reducers: {
    authModalAction: (state, action) => {
      const { method, open } = action.payload;
      state.method = method;
      state.open = open;
    },
  },
});

export const { authModalAction } = authModalSlice.actions;

export default authModalSlice.reducer;
