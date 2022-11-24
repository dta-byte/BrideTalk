import "./groupthemebox.css";
import { Button } from "../../buttons/Button";
import React, { useState } from "react";

export const GroupThemeBox = (props) => {
  const { text } = props;

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div Classname="theme-box-container">
      <div className="theme-box">
        <p>Theme {text}</p>

        <button
          class="join-group-button"
          onClick={handleClick}
          style={{
            backgroundColor: active
              ? "var(--global-secondary-5)"
              : "var(--global-secondary-3)",
          }}
        >
          Join group
        </button>
      </div>
    </div>
  );
};

/*
          <Button
            color={"var(--global-grey-4)"}
            text={"Join group"}
            onClick={handleClick}
            style={{ backgroundColor: active ? "red" : "white" }}
            /*handleClick={() => navigateTo(-1)} */
