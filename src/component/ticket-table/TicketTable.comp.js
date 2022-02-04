import React from "react";
import { Table } from "react-bootstrap";
// import tickets from "../../assets/data/dummy-ticket.json";
import PropsTypes from "prop-types";

export const TicketTable = ({ tickets }) => {
  // if (tickets.length)
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
      {tickets.length ? (
        tickets.map((ticket) => (
          <tbody key={ticket.id}>
            <tr>
              <td>{ticket.id}</td>
              <td>{ticket.subject}</td>
              <td>{ticket.status}</td>
              <td>{ticket.addedData}</td>
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

TicketTable.prototype = {
  ticket: PropsTypes.array.isRequired,
};
