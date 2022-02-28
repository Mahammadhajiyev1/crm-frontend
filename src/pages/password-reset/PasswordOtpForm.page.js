import React from "react";
import { useSelector } from "react-redux";
import { PasswordReset } from "../../component/password-reset/PasswordReset.comp";
import PasswordResetForm from "../../component/password-reset/PasswordResetForm.comp";
import "./PasswordOtpForm.style.css";

export const PasswordOtpForm = () => {
  const { showOtpForm } = useSelector((state) => state.password);

  return (
    <div className='passwordOtpForm-page bg-info'>
      <div className='jumbotron'>
        {showOtpForm ? <PasswordResetForm /> : <PasswordReset />}
      </div>
    </div>
  );
};
