import React, { useState } from "react";
import { Login } from "../../component/login/Login.comp";
import { PasswordReset } from "../../component/password-reset/PasswordReset.comp";
import "./Entry.style.css";

export const Entry = () => {
  const [formLoad, setFormLoad] = useState("login");

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    //TODO call api to submit the form
    // console.log(email);
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };
  return (
    <div className='entry-page bg-info'>
      <div className='jumbotron'>
        {formLoad === "login" && <Login formSwitcher={formSwitcher} />}
        {formLoad === "reset" && (
          <PasswordReset
            // handleOnChange={handleOnChange}
            // email={email}
            formSwitcher={formSwitcher}
            // handleOnResetSubmit={handleOnResetSubmit}
          />
        )}
      </div>
    </div>
  );
};
