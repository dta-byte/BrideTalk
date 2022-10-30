import React from "react";
import "./centeredheadline.css";

export const CenteredHeadline = (props) => {
  const { headline } = props;

  return (
    <>
      <div className="headline"></div>

      <h1 className="text">{headline}</h1>
    </>
  );
};
