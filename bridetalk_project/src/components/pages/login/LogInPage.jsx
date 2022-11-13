import {
  Headline1,
  EnterPassword,
  EnterEmail,
  Button,
} from "../../atoms";
import { Link } from "react-router-dom";
import "./loginpage.css";

export const LoginPage = () => {
  function handleClick() {
    console.log("Button has been clicked");
  }

  return (
    <div className="login-form-container">
      <Headline1 headline="Log in"></Headline1>

      <div className="link-to-signup">
        Not a user? Create a user <Link to="/sign-up"> here</Link>
      </div>

      <div className="login-input-fields">
        <EnterEmail email="Email "></EnterEmail>
        <EnterPassword password="Password"></EnterPassword>
      </div>
        <div className="link-forgot-password">
            <Link to="/reset"> Forgot password?</Link>
        </div>
      <Button
        text={"Let me chat"}
        handleClick={handleClick}
      />
    </div>
  );
};
