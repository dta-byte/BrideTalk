import { MainHeadline, EnterPassword, EnterEmail } from "../../atoms";
import "./loginpage.css";
import { Text } from "react";
import PrimaryButton from "../../atoms/buttons/PrimaryButton";

export const LoginPage = () => {
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

      <PrimaryButton>{"Let me chat"} </PrimaryButton>
    </div>
  );
};
