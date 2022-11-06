import {
  MainHeadline,
  PrimaryButton,
  CancelButton,
  EnterText,
  EnterEmail,
  EnterPassword,
  DropdownLocation,
} from "../../../atoms";
import "./createuserform.css";

import TestButton from "../../../atoms/buttons/TestButton";
import { useNavigate } from "react-router-dom";
import TestBack from "../../../atoms/buttons/TestBack";
export const CreateUserForm = () => {
  let navigate = useNavigate();

  const toFrontPage = () => {
    let path = "/";
    navigate(path);
  };

  const toLoginPage = () => {
    let path = "/login";
    navigate(path);
  };

  return (
    <div>
      <div className="form">
        <MainHeadline headline="Sign up to Bride Talk"></MainHeadline>
        <div
          handleClick={toLoginPage}
          className="question"
          style={{
            paddingBottom: "15px",
            paddingTop: "0px",
          }}
        >
          Already a user?{" "}
          <span
            className="login"
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            <a href="http://localhost:3000/login">Log in here</a>
          </span>
        </div>
        <EnterText text="First Name "></EnterText>
        <EnterText text="Last Name "></EnterText>
        <EnterEmail email="Email "></EnterEmail>
        <EnterPassword password="Password"></EnterPassword>
        <EnterPassword password="Confirm Password"></EnterPassword>
        <DropdownLocation question="Which locations are you interested in?"></DropdownLocation>
        {/* <CancelButton>{"Go back"}</CancelButton> */}
        <TestBack text={"Go back"} handleClick={toLoginPage}></TestBack>
        <TestButton text={"Sign me up"} handleClick={toFrontPage}></TestButton>
      </div>
    </div>
  );
};
