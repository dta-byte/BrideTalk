import React from "react";
import "./mainheadline.css";

export const MainHeadline = (props) => {
  const { headline } = props;

  return (
    <>
      <div className="headline"></div>

      <h1 className="text">{headline}</h1>
    </>
  );
};
