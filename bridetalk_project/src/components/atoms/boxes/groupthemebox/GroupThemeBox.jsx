import "./groupthemebox.css";
import React, { useState } from "react";

export const GroupThemeBox = (props) => {
  const { text } = props;

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div classname="theme-box-container">
      <div className="theme-box">
        <div className="theme-text">{text}</div>

        {/* Join group button change color and text when clicking */}
        <button
          className="join-group-button"
          onClick={handleClick}
          style={{
            backgroundColor: active
              ? "var(--global-secondary-3)"
              : "var(--global-secondary-5)",
          }}
        >
          {active ? "Go to chat" : "Join group"}
        </button>
      </div>
    </div>
  );
};
