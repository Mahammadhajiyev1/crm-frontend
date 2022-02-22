import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/ticket-listing/ticketsSlice";
import loginReducer from "./component/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
    user: userReducer,
  },
});

export default store;
