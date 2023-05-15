import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  method: "signup",
  isOpen: 0,
};

export const phoneModalSlice = createSlice({
  name: "phoneModalSlice",
  initialState,
  reducers: {
    phoneModalAction: (state, action) => {
      const { method, isOpen } = action.payload;
      state.method = method;
      state.isOpen = isOpen;
    },
  },
});

export const { phoneModalAction } = phoneModalSlice.actions;

export default phoneModalSlice.reducer;
