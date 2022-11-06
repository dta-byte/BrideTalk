import React from "react";
import "./primarybutton.css";

function PrimaryButton(props) {
  return (
    <button class="primarybutton" onClick={() => props.handleClick()}>
      {props.text}
    </button>
  );
}

export default PrimaryButton;
