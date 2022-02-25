import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/ticket-listing/ticketsSlice";
import loginReducer from "./component/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
import newTicketReducer from "./component/add-ticket-form/addTicketSlicer";
const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
    user: userReducer,
    openTicket: newTicketReducer,
  },
});

export default store;
