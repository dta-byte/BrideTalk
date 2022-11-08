import React from "react";
import "./fillinbox.css";

export const EnterEmail = (props) => {
  const { email } = props;

  return (
    <div className="form-body">
      <label className="form__label" for="email">
        {email}
        <div></div>
      </label>
      <input
        type="email"
        id="email"
        className="form__input"
        placeholder={email}
      />
    </div>
  );
};
