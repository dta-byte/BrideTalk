import React from "react";
import "./bodytext.css";

export const BodyText = (props) => {
  const { text } = props;

  return (
    <>
      <div className="headline"></div>

      <div className="text">{ text }</div>
    </>
  );
};
