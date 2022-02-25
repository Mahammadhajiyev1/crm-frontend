import { createNewTicket } from "../../api/ticketApi";
import {
  openNewTicketFail,
  openNewTicketPending,
  openNewTicketSuccess,
} from "./addTicketSlicer";

export const openNewTicket = (formData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(openNewTicketPending());
      const result = await createNewTicket(formData);
      if (result.status === "error ") {
        return dispatch(openNewTicketFail(result.message));
      }

      dispatch(openNewTicketSuccess(result.message));
    } catch (error) {
      dispatch(openNewTicketFail(error));
    }
  });
};
