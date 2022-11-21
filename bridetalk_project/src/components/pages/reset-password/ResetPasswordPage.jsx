import { InputField } from "../../atoms";

import "./resetpasswordpage.css";


export const ResetPasswordPage = () => {


  return (
    <div className="reset-container">
      <div headline="headline-reset-password"/>
      <h4 type="text">
        Lost your password? Please enter your email address. You Will receive a
        link to create a new password via email.
      </h4>

      <div className="email">
        <InputField email="Email "/>
      </div>

      <button className="reset-psw-button"> Reset password </button>
    </div>
  );
};
