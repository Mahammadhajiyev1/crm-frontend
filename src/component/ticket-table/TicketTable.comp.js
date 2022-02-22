import React from "react";
import { Table } from "react-bootstrap";
// import tickets from "../../assets/data/dummy-ticket.json";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const TicketTable = () => {
  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );
  // if (!tickets.length) return <h3>Something went wrong</h3>;

  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <h3>Something went wrong: {error}</h3>;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      {searchTicketList.length ? (
        searchTicketList.map((ticket) => (
          <tbody key={ticket._id}>
            <tr>
              <td>{ticket._id}</td>

              <td>
                <Link to={`/ticket/${ticket._id}`}>{ticket.subject}</Link>
              </td>
              <td>{ticket.status}</td>
              <td>{ticket.openAt}</td>
            </tr>
          </tbody>
        ))
      ) : (
        <tbody>
          <tr>
            <td colSpan='4' className='text-center'>
              No ticket has been found
            </td>
          </tr>
        </tbody>
      )}
    </Table>
  );
};
