import {
  Headline1,
  PrimaryButton,
  EnterEmail,
  CancelButton,
} from "../../atoms";
import "./resetPage.css";



export const ResetPage = () => {
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
        <EnterEmail email="Email "></EnterEmail>
      </div>

      <button onclick="handleClick()">Reset password</button>

      {/* Denne knap "virker", men er grim
      <div className="reset-email-button">
        <TestButton id="mybutton"
          text={"Reset password"}
          handleClick={handleClick}
        ></TestButton>
      </div>

      /* Go-back knap
      <div className="Go-back">
        <CancelButton>{"Go back"}</CancelButton>
      </div>
      */}
    </div>
  );
};
