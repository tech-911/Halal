import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null };

export const userDataSlice = createSlice({
  name: "userDataSlice",
  initialState,
  reducers: {
    userDataAction: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
  },
});

export const { userDataAction } = userDataSlice.actions;

export default userDataSlice.reducer;
