import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../component/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-ticket.json";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center mt-5 mb-2'>
          <Button
            variant='info'
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Add new ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className='text-center  mb-2'>
          <div>Total ticket:50</div>
          <div>Pending tickets:5</div>
        </Col>
      </Row>
      <Row>
        <Col className='text-center  mt-2'>Recently added tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className='recent-ticket  mt-2'>
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
