import {
  Headline1,
  EnterText,
  EnterEmail,
  EnterPassword,
  DropdownLocation,
  Button,
} from "../../../atoms";
import "./createuserform.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../../core/_request";
import Parse from 'parse'

export const CreateUserForm = () => {


  let navigate = useNavigate();

  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const onChangeFName = () => {
    setFname();
    console.log("jeg bliver kaldt ");
    console.log("Firstname: " + firstName);
  }

  const onChangeLName = () => {
    setLname();
    console.log("Lastname: " + lastName);
  }

  const onChangeEmail = () => {
    setEmail();
    console.log("Email: " + email);
  }
  const onChangePassword = () => {
    setPasword();
    console.log("Password: " + email);
  }

  const goBack = () => {
    let path = navigate(-1);
    navigate(path);
  };

  return (
    <div>
      <div className="create-user-form">
        <Headline1 headline="Sign up to Bride Talk"></Headline1>
        <div className="link-to-login">
          Already a user? <Link to="/login"> Log in here </Link>
        </div>
        <EnterText text="First Name " value={firstName} onChange={onChangeFName} />
        <EnterText text="Last Name " value={lastName}
          onChange={onChangeLName} />
        <EnterEmail email="Email " value={email} onChange={onChangeEmail} />
        <EnterPassword password="Password" value={password} onChange={onChangePassword} />
        <EnterPassword password="Confirm Password" value={password} onChange={onChangePassword} />
        <DropdownLocation question="Which locations are you interested in?" />

        <div className="buttons-row">

          <Button
          className="button-back"
            color={"var(--global-grey-4)"}
            text={"Go back"}
            handleClick={goBack} />

          <Button
            color={"var(--global-primary-2)"}
            text={"Sign me up"}
            onSubmit={() => createUser(firstName, lastName, email)}
          />
        </div>
      </div>
    </div>
  );
};
