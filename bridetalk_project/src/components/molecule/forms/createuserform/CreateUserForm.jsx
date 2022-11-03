import {
  MainHeadline,
  PrimaryButton,
  CancelButton,
  EnterText,
  EnterEmail,
  EnterPassword,
  Dropdown,
} from "../../../atoms";
import "./createuserform.css";

import TestButton from "../../../atoms/buttons/TestButton";
export const CreateUserForm = () => {
  function handeClick() {
    console.log("Button has been clickec");
  }
  
  return (
    <div>
      <div className="form">
        <MainHeadline headline="Sign up to Bride Talk"></MainHeadline>
        <div
          className="question"
          style={{
            paddingBottom: "15px",
            paddingTop: "0px",
          }}
        >
          Already a user?{" "}
          <span
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Log in here
          </span>
        </div>
        <EnterText text="First Name "></EnterText>
        <EnterText text="Last Name "></EnterText>
        <EnterEmail email="Email "></EnterEmail>
        <EnterPassword password="Password"></EnterPassword>
        <EnterPassword password="Confirm Password"></EnterPassword>
        <Dropdown question="Which locations are you interested in?"></Dropdown>
        <CancelButton>{"Go back"}</CancelButton>
        <TestButton text={"Sign me up"} handleClick={handeClick}></TestButton>
      </div>
    </div>
  );
};
