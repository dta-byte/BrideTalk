import { MainHeadline, EnterPassword, EnterEmail, PrimaryButton } from "../../atoms";
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
        <a href="http://localhost:3000/create-user">here</a>
      </h4>

      <div className="login-fields-container">
        <EnterEmail email="Email "></EnterEmail>
        <EnterPassword password="Password"></EnterPassword>

        <div className="forgot-password">
          <h4 type="text">
            <a href="http://localhost:3000/reset">Forgot password?</a>
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
