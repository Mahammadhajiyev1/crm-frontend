import {
  getAllTickets,
  getSingleTicket,
  updateReplyTicket,
  updateTicketStatusClosed,
} from "../../api/ticketApi";
import {
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchSingleTicketFail,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  searchTicket,
  replyTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  closeTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
} from "./ticketsSlice";

export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets();

    result.data.result.length &&
      dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterSearchedTickets = (str) => (dispatch) => {
  dispatch(searchTicket(str));
};

// actions for single ticket
export const fetchSingleTicket = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketLoading());
  try {
    const result = await getSingleTicket(_id);

    dispatch(
      fetchSingleTicketSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    console.log(error);
    dispatch(fetchSingleTicketFail(error.message));
  }
};
// Reply for single ticket
export const replyOnTicket = (_id, messageObject) => async (dispatch) => {
  dispatch(replyTicketLoading());
  try {
    const result = await updateReplyTicket(_id, messageObject);
    if (result.status === "error") {
      return dispatch(replyTicketFail(result.message));
    }
    dispatch(fetchSingleTicket(_id));
    dispatch(replyTicketSuccess(result.message));
  } catch (error) {
    console.log(error);
    dispatch(replyTicketFail(error.message));
  }
};
// Action for closing ticket
export const closeTicket = (_id) => async (dispatch) => {
  dispatch(closeTicketLoading());
  try {
    const result = await updateTicketStatusClosed(_id);
    if (result.status === "error") {
      return dispatch(closeTicketFail(result.message));
    }
    dispatch(fetchSingleTicket(_id));
    dispatch(closeTicketSuccess(result.message));
  } catch (error) {
    console.log(error);
    dispatch(closeTicketFail(error.message));
  }
};
