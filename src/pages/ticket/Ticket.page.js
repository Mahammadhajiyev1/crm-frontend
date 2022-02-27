import React, { useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { BreadCrumb } from "../../component/breadcrumb/BreadCrumb.comp";
import { MessageHistory } from "../../component/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../component/update-ticket/UpdateTicket.comp";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  closeTicket,
  fetchSingleTicket,
} from "../ticket-listing/ticketsAction";
import { resetResponseMessage } from "../ticket-listing/ticketsSlice";

// const ticket = tickets[0];

export const Ticket = () => {
  const dispatch = useDispatch();
  const { tId } = useParams();
  const { isLoading, error, selectedTicket, replyTicketError, replyMessage } =
    useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(fetchSingleTicket(tId));

    return () => {
      (replyTicketError || replyMessage) && dispatch(resetResponseMessage());
    };
  }, [tId, dispatch, replyMessage, replyTicketError]);

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page='Ticket' />
        </Col>
      </Row>
      <Row>
        <Col>
          {isLoading && <Spinner variant='primary' animation='border' />}
          {error && <Alert variant='danger'>{error}</Alert>}
          {replyTicketError && (
            <Alert variant='danger'>{replyTicketError}</Alert>
          )}
          {replyMessage && <Alert variant='success'>{replyMessage}</Alert>}
        </Col>
      </Row>
      <Row>
        <Col className='text-weight-bolder text-secondary'>
          <div className='subject'>Subject: {selectedTicket.subject}</div>
          <div className='date'>
            Date:{" "}
            {selectedTicket.openAt &&
              new Date(selectedTicket.openAt).toLocaleString()}
          </div>
          <div className='status '> Status: {selectedTicket.status}</div>
        </Col>
        <Col className='text-right'>
          <Button
            variant='outline-info'
            onClick={() => dispatch(closeTicket(tId))}
            disabled={selectedTicket.status === "Closed"}
          >
            Close Ticket
          </Button>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          {selectedTicket.conversations && (
            <MessageHistory message={selectedTicket.conversations} />
          )}
        </Col>
      </Row>
      <hr />
      <Row className='mt-4'>
        <Col>
          <UpdateTicket _id={tId} />
        </Col>
      </Row>
    </Container>
  );
};
