import React from "react";
import "./buttontext.css";

export const ButtonText = (props) => {
  const { text } = props;

  return (
    <>
      <div className="headline"></div>

      <div className="button-text">{text}</div>
    </>
  );
};
