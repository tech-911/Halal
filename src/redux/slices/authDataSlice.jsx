import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: {},
};

export const authDataSlice = createSlice({
  name: "authDataSlice",
  initialState,
  reducers: {
    authDataAction: (state, action) => {
      const { authData } = action.payload;
      state.authData = authData;
    },
  },
});

export const { authDataAction } = authDataSlice.actions;

export default authDataSlice.reducer;
