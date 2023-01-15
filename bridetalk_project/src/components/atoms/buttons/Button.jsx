import React from "react";
import "./button.css";

// The color of the button is by default set to the primary color.
export const Button = (props) => {
  const { text, handleClick, color = "hsl(346, 52%, 77%)" } = props;
  
  return (
    <button
      style={{ backgroundColor: color }}
      className="button-component"
      onClick={() => handleClick()}
    >
      <div className="button-text">{text}</div>
    </button>
  );
};
