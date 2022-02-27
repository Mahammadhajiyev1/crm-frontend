import React from "react";
import RegistrationForm from "../../component/registration-form/RegistrationForm.comp";
import "./Registration.style.css";

export const Registration = () => {
  return (
    <div className='registration-page bg-info'>
      <div className='mt-5'>
        <div className='jumbotron'>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};
