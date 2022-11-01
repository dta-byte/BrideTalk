import React from "react";
import "./primarybutton.css";

function TestButton(props){ 
  return <button class="primarybutton" onClick={()=>props.handleClick()}>{props.text}</button>;
};

export default TestButton;