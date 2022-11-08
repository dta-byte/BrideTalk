import React from "react";
import "./bodytext.css";

export const BodyText = (props) => {
  const { headline } = props;

  return (
    <>
      <div className="headline"></div>

      <div className="text">{headline}</div>
    </>
  );
};
