import React from "react";
import "./dropdownlocation.css";

export const DropdownLocation = (props) => {
  const { question } = props;

  return (
    <div className="dropdown">
      <label>{question}</label>
      <div className="custom-select" class="custom-select">
        <select name="select" id="select">
          <option hidden selected>
            Choose location
          </option>
          <option value="options">All areas in Denmark</option>
          <option value="option 1">Sjælland</option>
          <option value="option 2">Jylland</option>
          <option value="option 2">Fyn</option>
        </select>
      </div>
    </div>
  );
};
