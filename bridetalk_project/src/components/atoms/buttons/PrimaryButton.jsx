import React from "react";
import { ButtonText } from "../typographies/ButtonText";
import "./primarybutton.css";

export const PrimaryButton = (props) => {
  return (
    <button className="primarybutton" onClick={() => props.handleClick()}>
    <ButtonText text={props.text} />
    </button>
  );
};
