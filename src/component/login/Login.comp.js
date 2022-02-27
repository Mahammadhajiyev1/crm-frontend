import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { loginFailed, loginPending, loginSuccess } from "./loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../api/userApi";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../pages/dashboard/userAction";

export const Login = ({ formSwitcher }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);
  useEffect(() => {
    sessionStorage.getItem("accessJWT") && navigate("/dashboard");
  }, [isAuth, navigate]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);

        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };
  // let buttonBehaviour = true;
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      // return (buttonBehaviour = false);
      return alert("Please fill Email and Password correctly");
    }
    dispatch(loginPending());

    try {
      const isAuth = await userLogin({ email, password });
      if (isAuth.status === "error") {
        return dispatch(loginFailed(isAuth.message));
      }
      dispatch(loginSuccess());
      dispatch(getUserProfile());

      navigate("/dashboard");
    } catch (error) {
      dispatch(loginFailed(error.message));
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Client Login</h1>
          <hr />
          {error && <Alert variant='danger'>{error} </Alert>}
          <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Adress</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}
                placeholder='Enter email'
                // requried='true'
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
                // required='true'
                onChange={handleOnChange}
              />
            </Form.Group>
            <hr />
            <Button type='submit'>Login</Button>
            {isLoading && <Spinner variant='primary' animation='border' />}
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
      <Row className='py-4'>
        <Col>
          Are you new here? <a href='/registration'>Register now!</a>
        </Col>
      </Row>
    </Container>
  );
};

Login.prototype = {
  formSwitcher: PropTypes.func.isRequired,
};
