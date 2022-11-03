import {
  MainHeadline,
  PrimaryButton,
  EnterPassword,
  EnterEmail,
} from "../../atoms";
import "./loginpage.css";

import TestButton from "../../atoms/buttons/TestButton";

export const LoginPage = () => {
  function handleClick() {
    console.log("Button has been clicked");
  }

  return (
    <div className="login-container">
      <MainHeadline headline="Log in"></MainHeadline>
      <h4 type="text">
        Not a user? Create a user <u>here</u>
      </h4>

      <div className="login-fields-container">
        <EnterEmail email="Email "></EnterEmail>
        <EnterPassword password="Password"></EnterPassword>

        <div className="forgot-password">
          <h4 type="text">
            <u>Forgot password?</u>
          </h4>
        </div>
      </div>

      <TestButton text={"Let me chat"} handleClick={handleClick}></TestButton>
    </div>
  );
};
