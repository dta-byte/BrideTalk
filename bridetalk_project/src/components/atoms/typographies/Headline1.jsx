import React from "react";
import "./headline1.css";

export const Headline1 = (props) => {
  const { headline } = props;

  return (
    <>
      <div className="headline"></div>

      <div className="headline1-text">{headline}</div>
    </>
  );
};
