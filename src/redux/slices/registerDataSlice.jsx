import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  full_name: "",
  dob: "",
  gender: "",
  height: "",
  marital_status: "",
  location: "",
  profession: "",
  email: "",
  phone_number: "",
  picture: [],
  // reg_method: null,
  // input_method: null,
};

export const registerDataSlice = createSlice({
  name: "registerDataSlice",
  initialState,
  reducers: {
    registerDataAction: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { registerDataAction } = registerDataSlice.actions;

export default registerDataSlice.reducer;
