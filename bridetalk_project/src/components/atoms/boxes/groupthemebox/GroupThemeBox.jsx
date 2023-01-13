import "./groupthemebox.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const GroupThemeBox = (props) => {
  const { text } = props;

  const [active, setActive] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/group-chat", { state: { theme: text } });
    console.log("navigated with " + text);
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
export default GroupThemeBox;
