import {
  Headline1,
  EnterText,
  EnterEmail,
  EnterPassword,
  DropdownLocation,
  Button,
} from "../../../atoms";

import "./createuserform.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
export const CreateUserForm = () => {
  let navigate = useNavigate();

  const toFrontPage = () => {
    let path = "/";
    navigate(path);
  };

  const goBack = () => {
    let path = navigate(-1);
    navigate(path);
  };

  const goSomewhere = (pathVar) => {
    navigate(pathVar);
  };

  return (
    <div>
      <div className="create-user-form">
        <Headline1 headline="Sign up to Bride Talk"></Headline1>
        <div className="link-to-login">
          Already a user? <Link to="/login"> Log in here </Link>
        </div>
        <EnterText text="First Name "></EnterText>
        <EnterText text="Last Name "></EnterText>
        <EnterEmail email="Email "></EnterEmail>
        <EnterPassword password="Password"></EnterPassword>
        <EnterPassword password="Confirm Password"></EnterPassword>
        <DropdownLocation question="Which locations are you interested in?"></DropdownLocation>

        <Button
          color={"hsl(0, 0%, 85%)"}
          text={"Go back"}
          handleClick={() => goSomewhere(navigate(-1))}
        />

        <Button
          color={"hsl(346, 52%, 77%)"}
          text={"Sign me up"}
          handleClick={() => goSomewhere("/")}
        />
      </div>
    </div>
  );
};
