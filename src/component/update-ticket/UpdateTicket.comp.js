import React from "react";
import { Form, Button } from "react-bootstrap";
import PropType from "prop-types";

export const UpdateTicket = ({ message, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text>Please reply your message here or update the ticket</Form.Text>
      <Form.Control
        as='textarea'
        value={message}
        placeholder='message'
        onChange={handleOnChange}
        rows={5}
        name='detail'
      />
      <div className='text-right mt-3 mb-3'>
        <Button variant='info' type='submit'>
          Reply
        </Button>
      </div>
    </Form>
  );
};

UpdateTicket.prototype = {
  message: PropType.string.isRequired,
  handleOnChange: PropType.func.isRequired,
  handleOnSubmit: PropType.func.isRequired,
};