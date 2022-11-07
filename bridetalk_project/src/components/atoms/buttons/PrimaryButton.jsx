import React from "react";
import "./primarybutton.css";

export const PrimaryButton = (props) => {
  return (
    <button class="primarybutton" onClick={() => props.handleClick()}>
      {props.text}
    </button>
  );
};
