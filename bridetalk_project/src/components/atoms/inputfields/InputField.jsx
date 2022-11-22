import React from "react";
import "./inputfield.css";

export const InputField = (props) => {
  const { text, onChangeOut, type } = props;

  return (
    <div className="form-body">
      <div className="username">
        <label className="form__label" for="text">
          {text}
          <div></div>
        </label>

        <input
          className="form__input"
          type={type}
          id="text"
          // placeholder={text}
          onChange={onChangeOut}
        />
      </div>
    </div>
  );
};
