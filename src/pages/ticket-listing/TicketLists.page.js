import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumb } from "../../component/breadcrumb/BreadCrumb.comp";
import { SearchForm } from "../../component/search-form/SearchForm.comp";
import { TicketTable } from "../../component/ticket-table/TicketTable.comp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllTickets } from "./ticketsAction";

export const TicketLists = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page='Ticket Listing' />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <Link to='/add-ticket'>
            <Button variant='info'>Add New Ticket</Button>
          </Link>
        </Col>
        <Col>
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
