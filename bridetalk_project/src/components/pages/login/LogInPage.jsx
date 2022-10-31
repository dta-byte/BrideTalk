import { MainHeadline } from "../../atoms";
import { PrimaryButton } from "../../atoms";
import "./loginpage.css";
import { Text } from "react";

export const LoginPage = () => {
  return (
    <div className="login-container">
      <MainHeadline headline="Log in"></MainHeadline>
      <h4 type="text">Not a user? create a user here</h4>

      <div className="login-fields-container">
        <div id="e-mail-text">
          <h4 type="text">E-mail</h4>
        </div>

        <div id="e-mail-input">
          <input type="text" placeholder="E-mail"></input>
        </div>

        <div id="password-text">
          <h4 type="text">Password</h4>
        </div>

        <div id="password-input">
          <input type="text" placeholder="Password"></input>
        </div>

        <h4 type="text">Forgot password?</h4>
      </div>

      <PrimaryButton>{"Let me chat"}</PrimaryButton>
    </div>
  );
};
