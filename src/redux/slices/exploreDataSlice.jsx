import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const exploreDataSlice = createSlice({
  name: "exploreDataSlice",
  initialState,
  reducers: {
    exploreDataAction: (state, action) => {
      return action.payload;
    },
  },
});

export const { exploreDataAction } = exploreDataSlice.actions;

export default exploreDataSlice.reducer;
