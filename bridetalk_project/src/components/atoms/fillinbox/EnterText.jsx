import React from "react";
import "./fillinbox.css";

export const EnterText = (props) => {
  const { text } = props;

  return (
    <div className="form-body">
      <div className="username">
        <label className="form__label" for="text">
          {text}
          <div></div>
        </label>
        <input
          className="form__input"
          type="text"
          id="text"
          placeholder={text}
        />
      </div>
    </div>
  );
};
