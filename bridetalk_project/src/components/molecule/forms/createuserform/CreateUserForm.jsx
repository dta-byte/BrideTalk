import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { InputField, DropdownLocation, Button } from "../../../atoms";
import "./createuserform.css";
import { addUser } from "../../../../services/parse-functions/_UserRequest";


export const CreateUserForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    location: ""
  });

  const toAddUser = async () => {
    try {
      await addUser(user);
      alert('Congratz! You have created a user! :)')

    } catch (error) {
      console.error("Error saving new user: ", error);
      alert("Could not add user :(");
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
            value={user.username}
            onChangeOut={(event) => setUser({ ...user, username: event.target.value })}
          />

          <InputField
            text="E-mail "
            value={user.email}
            type="email"
            onChangeOut={(event) => setUser({ ...user, email: event.target.value })}
          />

          <InputField
            text="Password"
            value={user.password}
            type="password"
            onChangeOut={(event) => setUser({ ...user, password: event.target.value })}
          />

          <InputField
            text="Confirm Password "
            value={user.password}
            type="password"
            onChangeOut={(event) => setUser({ ...user, password: event.target.value })}
          />
        </div>

        <DropdownLocation
          question="Which locations are you interested in?"
          onChangeOut={(event) => setUser({ ...user, location: event.target.value })}
        />

        <div className="buttons-row">
          <Button
            className="button-back"
            color={"var(--global-grey-4)"}
            text={"Go back"}
            handleClick={() => navigate(-1)}
          />

          <Button
            color={"var(--global-primary-2)"}
            text={"Sign me up"}
            handleClick={toAddUser}
          />
        </div>
      </div>
    </div>
  );
};
