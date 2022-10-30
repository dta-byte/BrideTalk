import React from "react";
import "./fillinbox.css";

export const Dropdown = (props) => {
  const { question } = props;

  return (
    <div className="dropdown">
      {question}
      <select name="selectList" id="selectList">
        <option selected value="options">
          All areas in Denmark
        </option>
        <option value="option 1">Sjælland</option>
        <option value="option 2">Jylland</option>
        <option value="option 2">Fyn</option>
      </select>
    </div>
  );
};
