import React from "react";
import "./primarybutton.css";

export const PrimaryButton = (props) => {
  return (
    <button className="primarybutton" onClick={() => props.handleClick()}>
      {props.text}
    </button>
  );
};
