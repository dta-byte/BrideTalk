import React from "react";
import "./cancelbutton.css";

function CancelButton(props) {
  return (
    <button class="cancelbutton" onClick={() => props.handleClick()}>
      {props.text}
    </button>
  );
}

export default CancelButton;
