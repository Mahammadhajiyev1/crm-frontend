import React, { useState } from "react";
import { Login } from "../../component/login/Login.comp";
import { PasswordReset } from "../../component/password-reset/PasswordReset.comp";
import "./Entry.style.css";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

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
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      // return (buttonBehaviour = false);
      return alert("Please fill Email and Password correctly");
    }

    //TODO call api to submit the form
    console.log(email, password);
  };
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      // return (buttonBehaviour = false);
      return alert("Please fill Email correctly");
    }

    //TODO call api to submit the form
    console.log(email);
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };
  return (
    <div className='entry-page bg-info'>
      <div className='jumbotron'>
        {formLoad === "login" && (
          <Login
            handleOnChange={handleOnChange}
            email={email}
            password={password}
            formSwitcher={formSwitcher}
            // buttonBehaviour={buttonBehaviour}
            handleOnSubmit={handleOnSubmit}
          />
        )}
        {formLoad === "reset" && (
          <PasswordReset
            handleOnChange={handleOnChange}
            email={email}
            formSwitcher={formSwitcher}
            handleOnResetSubmit={handleOnResetSubmit}
          />
        )}
      </div>
    </div>
  );
};
