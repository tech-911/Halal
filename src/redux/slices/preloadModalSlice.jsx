import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  preloadOpen: 0,
};

export const preloadModalSlice = createSlice({
  name: "preloadModalSlice",
  initialState,
  reducers: {
    preloadModalAction: (state, action) => {
      const { preloadOpen } = action.payload;
      state.preloadOpen = preloadOpen;
    },
  },
});

export const { preloadModalAction } = preloadModalSlice.actions;

export default preloadModalSlice.reducer;
