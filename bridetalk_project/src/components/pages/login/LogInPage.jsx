import { MainHeadline, EnterPassword, EnterEmail, PrimaryButton } from "../../atoms";
import { Link } from "react-router-dom";
import "./loginpage.css";

export const LoginPage = () => {
  function handleClick() {
    console.log("Button has been clicked");
  }

  return (
    <div className="login-container">
      <MainHeadline headline="Log in"></MainHeadline>
      <h4 type="text">
        Not a user? Create a user{" "}
        <Link to="/sign-up"> here</Link>
      </h4>

      <div className="login-fields-container">
        <EnterEmail email="Email "></EnterEmail>
        <EnterPassword password="Password"></EnterPassword>

        <div className="forgot-password">
          <h4 type="text">
          <Link to="/reset"> Forgot password?</Link>
          </h4>
        </div>
      </div>

      <PrimaryButton
        text={"Let me chat"}
        handleClick={handleClick}
      ></PrimaryButton>
    </div>
  );
};
