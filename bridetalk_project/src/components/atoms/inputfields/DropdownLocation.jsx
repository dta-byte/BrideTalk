import React from "react";
import "./dropdownlocation.css";

export const DropdownLocation = (props) => {
  const { question, onChangeOut } = props;

  return (
    <div className="dropdown">
      <label className="dropdown__label" onChange={onChangeOut}>
        {question}
      </label>

      <select className="select-location">
        <option hidden selected> Choose location </option>

        <option value="options">All areas in Denmark</option>
        <option value="option 1">Sjælland</option>
        <option value="option 2">Jylland</option>
        <option value="option 2">Fyn</option>
      </select>
    </div>
  );
};
