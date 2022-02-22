import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/ticket-listing/ticketsSlice";
import loginReducer from "./component/login/loginSlice";
const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
  },
});

export default store;
