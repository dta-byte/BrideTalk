import {
  Headline1,
  InputField,
} from "../../atoms";

import "./resetpasswordpage.css";


export const ResetPasswordPage = () => {
  function handleClick() {
    console.log("Button has been clicked");
  }

  return (
    <div className="reset-container">
      <Headline1 headline="Reset Your Password"></Headline1>
      <h4 type="text">
        Lost your password? Please enter your email address. You Will receive a
        link to create a new password via email.
      </h4>

      <div className="email">
        <InputField email="Email "/>
      </div>

      <button className="reset-psw-button" onclick="handleClick()">Reset password</button>
    </div>
  );
};
