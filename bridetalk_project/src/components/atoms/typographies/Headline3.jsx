import React from "react";
import "./headline3.css";

export const Headline3 = (props) => {
  const { headline } = props;

  return (
    <>
      <div className="headline"></div>

      <div className="text">{headline}</div>
    </>
  );
};
