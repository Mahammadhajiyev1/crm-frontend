import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../component/ticket-table/TicketTable.comp";
import { BreadCrumb } from "../../component/breadcrumb/BreadCrumb.comp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTickets } from "../ticket-listing/ticketsAction";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);
  useEffect(() => {
    if (!tickets.length) {
      dispatch(fetchAllTickets());
    }
  }, [tickets, dispatch]);

  const pendingTickets = tickets.filter((row) => row.status !== "Closed");
  const totalTickets = tickets.length;

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page='Dashboard' />
        </Col>
      </Row>
      <Row>
        <Col className='text-center mt-5 mb-2'>
          <Link to='/add-ticket'>
            <Button
              variant='info'
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Add new ticket
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className='text-center  mb-2'>
          <div>Total ticket:{totalTickets}</div>
          <div>Pending tickets:{pendingTickets.length}</div>
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
