import React, { useEffect, useState } from "react";
import { Form, Button, Col, Row, Spinner, Alert } from "react-bootstrap";
import "./AddTicketForm.style.css";
// import PropTypes from "prop-types";
import { shortText } from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { openNewTicket } from "./addTicketAction";

const initialFormData = {
  subject: "",
  issueDate: "",
  message: "",
};
const initialFormError = {
  subject: false,
  issueDate: false,
  message: false,
};
export const AddTicketForm = () => {
  const { user } = useSelector((state) => state.user);
  const { isLoading, error, successMessage } = useSelector(
    (state) => state.openTicket
  );
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormData);
  const [formDataError, setFormDataError] = useState(initialFormError);
  useEffect(() => {}, [formData, formDataError]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      sender: user.name,
    });
    // console.log(name, value);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFormDataError(initialFormError);
    const isSubjectValid = await shortText(formData.subject);

    setFormDataError({
      ...initialFormError,
      subject: !isSubjectValid,
    });
    dispatch(openNewTicket(formData));
    console.log(formData);
  };
  return (
    <div className='jumbotron mt-3 bg-light'>
      <h1 className='text-info text-center'>Add New Ticket</h1>
      <hr />
      <div>
        {error && <Alert variant='danger'>{error}</Alert>}
        {successMessage && <Alert variant='primary'>{successMessage}</Alert>}
        {isLoading && <Spinner variant='primary' animation='border' />}
      </div>
      <div>{error && <Alert variant='danger '>error</Alert>}</div>
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
            Message
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as='textarea'
              name='message'
              rows='5'
              value={formData.message}
              required={true}
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        <hr />
        <Button type='submit' variant='info' block='true'>
          Open Ticket
        </Button>
      </Form>
    </div>
  );
};

// AddTicketForm.prototype = {
//   handleOnSubmit: PropTypes.func.isRequired,
//   handleOnChange: PropTypes.func.isRequired,
//   formData: PropTypes.object.isRequired,
//   formDataError: PropTypes.object.isRequired,
// };
