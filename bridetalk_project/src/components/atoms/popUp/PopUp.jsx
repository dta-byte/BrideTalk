import React from "react";
import "./popUp.css";

export const PopUp = (props) => {
  const { trigger, setTrigger, children } = props;
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          X
        </button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );
};
