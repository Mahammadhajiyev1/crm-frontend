import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { replyOnTicket } from "../../pages/ticket-listing/ticketsAction";
import PropType from "prop-types";

export const UpdateTicket = ({ _id }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };
  const { user } = useSelector((state) => state.user);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const messageObject = {
      message,
      sender: user.name,
    };

    dispatch(replyOnTicket(_id, messageObject));
    setMessage("");
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label>

        <Form.Text>
          {" "}
          Please reply your message here or update the ticket
        </Form.Text>
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
    </div>
  );
};

UpdateTicket.prototype = {
  _id: PropType.string.isRequired,
};
