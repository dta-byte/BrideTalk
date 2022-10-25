import React from "react";

export const MainHeadline = (props) => {
  const { headline } = props;

  return (
    <>
      <div className="headline"></div>

      <h1 className="text">{headline}</h1>
    </>
  );
};
