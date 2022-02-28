import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormText,
  Row,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "./passwordResetAction";

const initialState = {
  pin: "",
  password: "",
  confirmPassword: "",
};

const passwordVerificationError = {
  isLengthy: false,
  hasUpperCase: false,
  hasLowerCase: false,
  hasNumber: false,
  hasSpecial: false,
  confirmPassword: false,
};

const PasswordResetForm = () => {
  const { isLoading, status, message, email } = useSelector(
    (state) => state.password
  );
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passwordVerificationError);

  useEffect(() => {}, [user]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    if (name === "password") {
      const isLengthy = value.length > 8;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecial = /[@,#,%,&]/.test(value);

      setPasswordError({
        ...passwordError,
        isLengthy,
        hasLowerCase,
        hasNumber,
        hasSpecial,
        hasUpperCase,
      });
    }
    if (name === "confirmPassword") {
      setPasswordError({
        ...passwordError,
        confirmPassword: user.password === value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { pin, password } = user;
    const newPasswordUser = { pin, newPassword: password, email };
    dispatch(updatePassword(newPasswordUser));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info'>Update Password</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
          {isLoading && <Spinner variant='info' animation='border' />}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type='number'
                name='pin'
                value={user.pin}
                onChange={handleOnChange}
                placeholder='OTP'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={user.password}
                onChange={handleOnChange}
                placeholder='Password'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                name='confirmPassword'
                value={user.confirmPassword}
                onChange={handleOnChange}
                isValid={passwordError.confirmPassword}
                placeholder='Confirm Password'
              />
            </Form.Group>
            <FormText>
              {!passwordError.confirmPassword && (
                <div className='text-danger mb-3'>Password did not match</div>
              )}
            </FormText>

            <ul className='mb-4'>
              <li
                className={
                  passwordError.isLengthy ? "text-success" : "text-danger"
                }
              >
                Minimum 8 characters
              </li>
              <li
                className={
                  passwordError.hasUpperCase ? "text-success" : "text-danger"
                }
              >
                At least one upper case
              </li>
              <li
                className={
                  passwordError.hasLowerCase ? "text-success" : "text-danger"
                }
              >
                At least one lower case
              </li>
              <li
                className={
                  passwordError.hasNumber ? "text-success" : "text-danger"
                }
              >
                At least one number
              </li>
              <li
                className={
                  passwordError.hasSpecial ? "text-success" : "text-danger"
                }
              >
                At least one specific characters: @ # $ % &{" "}
              </li>
            </ul>

            <Button
              variant='primary'
              type='submit'
              disabled={Object.values(passwordError).includes(false)}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className='text-center'>
        <Col>
          <a href='/'>Login now</a>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordResetForm;
