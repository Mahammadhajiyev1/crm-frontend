import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "./AddTicketForm.style.css";
import PropTypes from "prop-types";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  formData,
  formDataError,
}) => {
  return (
    <div className='jumbotron mt-3 bg-light'>
      <h1 className='text-info text-center'>Add New Ticket</h1>
      <hr />
      <Form autoComplete='off' onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name='subject'
              value={formData.subject}
              placeholder='Subject'
              required={true}
              onChange={handleOnChange}
            />
            <Form.Text className='text-danger'>
              {formDataError.subject && "Subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found At
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type='date'
              name='issueDate'
              value={formData.issueDate}
              required={true}
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Details
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as='textarea'
              name='details'
              rows='5'
              value={formData.details}
              required={true}
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        <hr />
        <Button type='submit' variant='info' block='true'>
          Submit Ticket
        </Button>
      </Form>
    </div>
  );
};

AddTicketForm.prototype = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formDataError: PropTypes.object.isRequired,
};
