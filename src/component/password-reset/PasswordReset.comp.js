import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const PasswordReset = ({
  handleOnChange,
  email,
  buttonBehaviour,
  handleOnResetSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Reset Password</h1>
          <hr />
          <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Adress</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}
                placeholder='Enter email'
                requried
                onChange={handleOnChange}
              />
            </Form.Group>

            <hr />
            <Button type='submit' /*disabled={buttonBehaviour}*/>Reset</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href='#!' onClick={() => formSwitcher("login")}>
            Login now
          </a>
        </Col>
      </Row>
    </Container>
  );
};

PasswordReset.prototype = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
