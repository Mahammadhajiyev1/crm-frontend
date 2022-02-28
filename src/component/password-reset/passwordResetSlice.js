import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  showOtpForm: false,
  email: "",
};

const passwordResetSlice = createSlice({
  name: "passwordReset",
  initialState,
  reducers: {
    passwordResetPending: (state) => {
      state.isLoading = true;
    },
    passwordResetSuccess: (state, action) => {
      state.isLoading = false;
      state.status = "success";
      state.message = action.payload.message;
      state.email = action.payload.email;
      state.showOtpForm = true;
    },
    updateResetSuccess: (state, action) => {
      state.isLoading = false;
      state.status = "success";
      state.message = action.payload;
    },
    passwordResetFail: (state, action) => {
      state.isLoading = false;
      state.status = "error";
      state.message = action.payload;
    },
  },
});

const { reducer, actions } = passwordResetSlice;
export const {
  passwordResetFail,
  passwordResetPending,
  passwordResetSuccess,
  updateResetSuccess,
} = actions;

export default reducer;
