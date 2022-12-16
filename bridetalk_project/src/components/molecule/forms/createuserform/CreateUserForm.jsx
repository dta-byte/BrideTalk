import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { InputField, DropdownLocation, Button } from "../../../atoms";
import { PopUp } from "../../popUp/PopUp";

import "./createuserform.css";

import Parse from "parse";

export const CreateUserForm = () => {
  let navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const [buttonPopup, setButtonPopup] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [location, setLocation] = useState("");

  //Todo: If user does not input a valid e-mail the user should not be created/save, and a alert should be send.

  const addUser = async function () {
    const userNameValue = username;
    const passWordValue = password;

    try {
      // create a new Parse User instance and since the signUp method returns a Promise, we need to call it using await

      const createdUser = await Parse.User.signUp(userNameValue, passWordValue);
      // const createdUser = new Parse.Object("_User");

      createdUser.set("username", username);
      createdUser.set("email", email);
      createdUser.set("password", password);
      createdUser.set("location", location);

      alert("Succes! User " + createdUser + " was created");

      await createdUser.save();
      return true;
    } catch (error) {
      console.log("Error saving new User: ", error);
      return false;
    }
  };

  return (
    <div>
      <div className="create-user-form-container">
        <div className="sign-up-headline">Sign up to Bride Talk</div>
        <div className="link-to-login">
          Already a user? Log in <Link to="/login"> here </Link>
        </div>
        <div className="inputfields-createuserform-container">
          <InputField
            text="Username "
            value={username}
            onChangeOut={(event) => {
              setUsername(event.target.value);
              // console.log(event.target.value)
            }}
          />

          <InputField
            text="E-mail "
            value={email}
            type="email"
            onChangeOut={(event) => {
              setEmail(event.target.value);
            }}
          />

          <InputField
            text="Password"
            value={password}
            type="password"
            onChangeOut={(event) => {
              setPasword(event.target.value);
            }}
          />

          <InputField
            text="Confirm Password "
            value={password}
            type="password"
            onChangeOut={(event) => {
              setPasword(event.target.value);
            }}
          />
        </div>

        <DropdownLocation
          question="Which locations are you interested in?"
          onChangeOut={setLocation}
        />

        <div className="buttons-row">
          <Button
            className="button-back"
            color={"var(--global-grey-4)"}
            text={"Go back"}
            handleClick={() => navigateTo(-1)}
          />

          <Button
            color={"var(--global-primary-2)"}
            text={"Sign me up"}
            handleClick={() => addUser(username, password)}
          />

          <Button
            color={"var(--global-primary-2)"}
            text={"popup"}
            handleClick={() => setButtonPopup(true)}
          />

          <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
            <p> Heeeey popUp</p>
          </PopUp>
        </div>
      </div>
    </div>
  );
};
