import {
  MainHeadline,
  EnterText,
  EnterEmail,
  EnterPassword,
  DropdownLocation,
} from "../../../atoms";
import "./createuserform.css";

import PrimaryButton from "../../../atoms/buttons/PrimaryButton";
import CancelButton from "../../../atoms/buttons/CancelButton";
import { useNavigate } from "react-router-dom";
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

  const goBack = () => {
    let path = navigate(-1);
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
        <CancelButton text={"Go back"} handleClick={goBack}></CancelButton>
        <PrimaryButton
          text={"Sign me up"}
          handleClick={toFrontPage}
        ></PrimaryButton>
      </div>
    </div>
  );
};

