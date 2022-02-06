import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumb } from "../../component/breadcrumb/BreadCrumb.comp";
import tickets from "../../assets/data/dummy-ticket.json";
import { MessageHistory } from "../../component/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../component/update-ticket/UpdateTicket.comp";
import { useParams } from "react-router-dom";

// const ticket = tickets[0];

export const Ticket = () => {
  const { tId } = useParams();
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");
  useEffect(() => {
    tickets.map((ticket) => ticket.id == tId && setTicket(ticket));
  }, [message, tId]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("sumbited");
  };
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page='Ticket' />
        </Col>
      </Row>
      <Row>
        <Col className='text-weight-bolder text-secondary'>
          <div className='subject'>Subject: {ticket.subject}</div>
          <div className='date'>sdfbn{ticket.addedData}</div>
          <div className='status '> {ticket.status}</div>
        </Col>
        <Col className='text-right'>
          <Button variant='outline-info'>Close Ticket</Button>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          {ticket.history && <MessageHistory message={ticket.history} />}
        </Col>
      </Row>
      <hr />
      <Row className='mt-4'>
        <Col>
          <UpdateTicket
            message={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
