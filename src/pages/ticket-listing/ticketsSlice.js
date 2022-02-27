import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  replyTicketError: "",
  searchTicketList: [],
  selectedTicket: {},
  replyMessage: "",
};

const ticketListSlice = createSlice({
  name: "ticketList",
  initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      state.tickets = action.payload;
      state.searchTicketList = action.payload;
      state.isLoading = false;
    },
    fetchTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    searchTicket: (state, action) => {
      state.isLoading = false;

      state.searchTicketList = state.tickets.filter((row) => {
        if (!action.payload) return row;
        return row.subject.toLowerCase().includes(action.payload.toLowerCase());
      });
    },

    fetchSingleTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleTicketSuccess: (state, action) => {
      state.selectedTicket = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    replyTicketLoading: (state) => {
      state.isLoading = true;
    },
    replyTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.replyMessage = action.payload;
    },
    replyTicketFail: (state, action) => {
      state.isLoading = false;
      state.replyTicketError = action.payload;
    },
    closeTicketLoading: (state) => {
      state.isLoading = true;
    },
    closeTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.replyMessage = action.payload;
    },
    closeTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    resetResponseMessage: (state) => {
      state.isLoading = false;
      state.replyTicketError = "";
      state.replyMessage = "";
    },
  },
});

const { reducer, actions } = ticketListSlice;
export const {
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchSingleTicketFail,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  replyTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  closeTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
  searchTicket,
  resetResponseMessage,
} = actions;
export default reducer;
