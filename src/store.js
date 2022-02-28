import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/ticket-listing/ticketsSlice";
import loginReducer from "./component/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
import newTicketReducer from "./component/add-ticket-form/addTicketSlicer";
import registrationReducer from "./component/registration-form/userRegistrationSlice";
import passwordReducer from "./component/password-reset/passwordResetSlice";
const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
    user: userReducer,
    openTicket: newTicketReducer,
    registration: registrationReducer,
    password: passwordReducer,
  },
});

export default store;
