import React from "react";
import { ButtonText } from "../typographies/ButtonText";
import "./button.css";
// The color of the button is by default set to the primary color. 

// How to use the component: 
        // <Button 
        // color={"hsl(0, 0%, 85%)"} 
        // text={"Go back"} 
        // handleClick={goBack}/>

export const Button = ({ text, handleClick, color = "hsl(346, 52%, 77%)" }) => {
  return (
    <button 
      style={{ backgroundColor: color }} 
      className="button-component" 
      onClick={() => handleClick()}>
      <ButtonText text={text} />
    </button>
  );
};
