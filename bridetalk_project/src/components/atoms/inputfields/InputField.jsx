import React from "react";
import "./inputfield.css";

export const InputField = (props) => {
  const { text, onChangeOut, type } = props;

  return (
    <div className="input-form">
      <label className="inputlabel-form" htmlFor="text">
        {text}
        <div> </div>
      </label>

      <input className="userinput-form" type={type} onChange={onChangeOut} />
    </div>
  );
};
