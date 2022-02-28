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
import { userRegistration } from "./userRegistrationAction";

const initialState = {
  name: "Mahammad Hajiyev",
  phone: "994502222222",
  email: "email@mail.com",
  company: "Mahacmmc",
  address: "S.vezirov street",
  password: "Password1@",
  confirmPassword: "Password1@",
};

const passwordVerificationError = {
  isLengthy: false,
  hasUpperCase: false,
  hasLowerCase: false,
  hasNumber: false,
  hasSpecial: false,

  confirmPassword: false,
};

const RegistrationForm = () => {
  const { isLoading, status, message } = useSelector(
    (state) => state.registration
  );
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passwordVerificationError);

  useEffect(() => {}, [newUser]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });
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
        confirmPassword: newUser.password === value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegistration(newUser));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info'>User Registration</h1>
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
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={newUser.name}
                onChange={handleOnChange}
                placeholder='Your name'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type='number'
                name='phone'
                value={newUser.phone}
                onChange={handleOnChange}
                placeholder='Phone number'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={newUser.email}
                onChange={handleOnChange}
                placeholder='Enter email'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type='text'
                name='company'
                value={newUser.company}
                onChange={handleOnChange}
                placeholder='Company name '
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                name='address'
                value={newUser.address}
                onChange={handleOnChange}
                placeholder='Full address'
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={newUser.password}
                onChange={handleOnChange}
                placeholder='Password'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                name='confirmPassword'
                value={newUser.confirmPassword}
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
            {isLoading && <Spinner variant='info' animation='border' />}
          </Form>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col>
          Already have account? {""}
          <a href='/'>Login Now</a>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
