import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../component/add-ticket-form/AddTicketForm.comp";
import { BreadCrumb } from "../../component/breadcrumb/BreadCrumb.comp";

export const AddTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page='New Ticket' />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  );
};
