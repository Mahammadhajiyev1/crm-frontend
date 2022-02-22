import { getAllTickets } from "../../api/ticketApi";
import {
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
  searchTicket,
} from "./ticketsSlice";

export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets();

    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterSearchedTickets = (str) => (dispatch) => {
  dispatch(searchTicket(str));
};
