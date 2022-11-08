import React from "react";
import "./cancelbutton.css";

export const CancelButton = (props) => {
  return (
    <button className="cancelbutton" onClick={() => props.handleClick()}>
      {props.text}
    </button>
  );
}


