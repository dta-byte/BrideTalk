import React from "react";
import "./headline2.css";

export const Headline2 = (props) => {
  const { headline } = props;

  return (
    <>
      <div className="headline"></div>

      <div className="text">{headline}</div>
    </>
  );
};
