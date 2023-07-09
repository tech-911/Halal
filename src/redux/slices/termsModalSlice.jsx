import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  termsOpen: 0,
};

export const termsModalSlice = createSlice({
  name: "termsModalSlice",
  initialState,
  reducers: {
    termsModalAction: (state, action) => {
      const { termsOpen } = action.payload;
      state.termsOpen = termsOpen;
    },
  },
});

export const { termsModalAction } = termsModalSlice.actions;

export default termsModalSlice.reducer;
