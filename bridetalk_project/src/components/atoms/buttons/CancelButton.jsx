import React from "react";
import "./cancelbutton.css";

export const CancelButton = (props) => {
  return (
    <button class="cancelbutton" onClick={() => props.handleClick()}>
      {props.text}
    </button>
  );
}


