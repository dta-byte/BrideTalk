import React from "react";
import "./fillinbox.css";

export const EnterPassword = (props) => {
  const { password } = props;

  return (
    <div className="form-body">
      <label className="form__label" for="password">
        {password}
        <div></div>
      </label>
      <input
        className="form__input"
        type="password"
        id="password"
        placeholder={password}
      />
    </div>
  );
};
