import { createSlice } from "@reduxjs/toolkit";

const initialState = { userData: null };

export const messageSlice = createSlice({
  name: "messageSlice",
  initialState,
  reducers: {
    messageSliceAction: (state, action) => {
      const { userData } = action.payload;
      state.userData = userData;
    },
  },
});

export const { messageSliceAction } = messageSlice.actions;

export default messageSlice.reducer;
