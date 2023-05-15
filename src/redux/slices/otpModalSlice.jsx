import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  otpOpen: 0,
};

export const otpModalSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    otpModalAction: (state, action) => {
      const { otpOpen } = action.payload;
      state.otpOpen = otpOpen;
    },
  },
});

export const { otpModalAction } = otpModalSlice.actions;

export default otpModalSlice.reducer;
