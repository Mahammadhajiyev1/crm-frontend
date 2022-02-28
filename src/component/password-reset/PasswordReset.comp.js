import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordResetOtp } from "./passwordResetAction";

export const PasswordReset = () => {
  const { isLoading, status, message } = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(sendPasswordResetOtp(email));
    //TODO call api to submit the form
    // console.log(email);
  };
  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Reset Password</h1>
          <hr />
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
          {isLoading && <Spinner variant='primary' animation='border' />}
          <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Adress</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}
                placeholder='Enter email'
                required={true}
                onChange={handleOnChange}
              />
            </Form.Group>

            <hr />
            <Button type='submit'>Reset</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href='/'>Login now</a>
        </Col>
      </Row>
    </Container>
  );
};
