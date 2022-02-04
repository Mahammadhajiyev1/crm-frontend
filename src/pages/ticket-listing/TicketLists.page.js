import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumb } from "../../component/breadcrumb/BreadCrumb.comp";
import { SearchForm } from "../../component/search-form/SearchForm.comp";
import { TicketTable } from "../../component/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-ticket.json";

export const TicketLists = () => {
  const [str, setStr] = useState("");
  const [displayTicket, setDisplayTicket] = useState(tickets);
  useEffect(() => {}, [str, displayTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLocaleLowerCase().includes(sttr.toLocaleLowerCase())
    );
    setDisplayTicket(displayTickets);
  };
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page='Ticket Listing' />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <Button variant='info'>Add New Ticket</Button>
        </Col>
        <Col>
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={displayTicket} />
        </Col>
      </Row>
    </Container>
  );
};
