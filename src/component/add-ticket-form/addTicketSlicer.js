import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  successMessage: "",
};

const newTicketSlice = createSlice({
  name: "newTicket",
  initialState,
  reducers: {
    openNewTicketPending: (state) => {
      state.isLoading = true;
    },
    openNewTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.successMessage = action.payload;
    },
    openNewTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = newTicketSlice;

export const { openNewTicketFail, openNewTicketPending, openNewTicketSuccess } =
  actions;

export default reducer;
