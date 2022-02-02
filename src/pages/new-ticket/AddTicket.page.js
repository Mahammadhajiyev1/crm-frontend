import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../component/add-ticket-form/AddTicketForm.comp";
import { BreadCrumb } from "../../component/breadcrumb/BreadCrumb.comp";
import { shortText } from "../../utils/validation";

const initialFormData = {
  subject: "",
  issueDate: "",
  details: "",
};
const initialFormError = {
  subject: false,
  issueDate: false,
  details: false,
};

export const AddTicket = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formDataError, setFormDataError] = useState(initialFormError);
  useEffect(() => {}, [formData, formDataError]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name, value);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFormDataError(initialFormError);
    const isSubjectValid = await shortText(formData.subject);

    setFormDataError({
      ...initialFormError,
      subject: !isSubjectValid,
    });
    console.log("form is submited");
  };
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page='New Ticket' />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formData={formData}
            formDataError={formDataError}
          />
        </Col>
      </Row>
    </Container>
  );
};
