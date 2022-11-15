import React, { useState } from "react";
import "./fillinbox.css";

export const EnterEmail = (props) => {
  const { email } = props;
  // useState returns a pair: the current state and the function setUserEmail
  const [ userEmail, setUsernEmail] = useState('');
  return (
    <div className="form-body">
      <label className="form__label" for="email">
        {email}
        <div></div>
      </label>
      <input
        // value={ email }
        type="email"
        id="email"
        className="form__input"
        placeholder={ email }
        onChange={setUsernEmail}
      />
    </div>
  );
};
