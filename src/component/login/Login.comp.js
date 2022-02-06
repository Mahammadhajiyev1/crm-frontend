import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Login = ({
  handleOnChange,
  email,
  password,
  buttonBehaviour,
  handleOnSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Client Login</h1>
          <hr />
          <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Adress</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}
                placeholder='Enter email'
                requried='true'
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={password}
                placeholder='Enter password'
                required='true'
                onChange={handleOnChange}
              />
            </Form.Group>
            <hr />
            <Button type='submit' /*disabled={buttonBehaviour}*/>Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href='#!' onClick={() => formSwitcher("reset")}>
            Forget password
          </a>
        </Col>
      </Row>
    </Container>
  );
};

Login.prototype = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
