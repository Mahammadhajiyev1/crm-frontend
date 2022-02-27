import "./App.css";
// import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { Entry } from "./pages/entry/Entry.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-listing/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./component/private-route/PrivateRoute.comp";
import { Registration } from "./pages/registration/Registration.page";

function App() {
  // you have to solve problem with private route

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Entry />} />
          <Route path='/registration' element={<Registration />} />
          <Route exact path='/' element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route exact path='/' element={<PrivateRoute />}>
            <Route path='/add-ticket' element={<AddTicket />} />
          </Route>
          <Route exact path='/' element={<PrivateRoute />}>
            <Route path='/tickets' element={<TicketLists />} />
          </Route>
          <Route exact path='/' element={<PrivateRoute />}>
            <Route path='/ticket/:tId' element={<Ticket />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
