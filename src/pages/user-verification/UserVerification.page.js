import React, { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { newUserRegistrationVerification } from "../../api/userApi";

import "./userVerification.style.css";

const initialResponse = {
  status: "",
  message: "",
};

export const UserVerification = () => {
  const { _id, email } = useParams();

  const data = { _id, email };

  const [response, setResponse] = useState(initialResponse);

  useEffect(() => {
    const apiCall = async () => {
      const result = await newUserRegistrationVerification(data);
      setResponse(result);
    };

    !response.status && apiCall();
  }, [response]);

  return (
    <div className='userVerification-page bg-info'>
      <div className='mt-5'>
        <div className='jumbotron'>
          {!response.status ? (
            <Spinner variant='info' animation='border' />
          ) : (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};
