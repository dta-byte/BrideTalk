import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { InputField, DropdownLocation, Button, PopUp } from "../../../atoms";
import { addUser } from "../../../../services/parse-functions";
import { BsCheckCircle } from "react-icons/bs";
import "./createuserform.css";

export const CreateUserForm = () => {
  const navigate = useNavigate();
  const [buttonPopup, setButtonPopup] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
  });

  //Todo: If user does not input a valid e-mail the user should not be created/save, and a alert should be send.
  const toAddUser = async () => {
    try {
      //Do something if the e-mail input is wrong
      await addUser(user);
      setButtonPopup(true);
    } catch (error) {
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
            onChangeOut={(event) =>
              setUser({ ...user, username: event.target.value })
            }
          />

          <InputField
            text="E-mail "
            value={user.email}
            type="email"
            onChangeOut={(event) =>
              setUser({ ...user, email: event.target.value })
            }
          />

          <InputField
            text="Password"
            value={user.password}
            type="password"
            onChangeOut={(event) =>
              setUser({ ...user, password: event.target.value })
            }
          />

          <InputField
            text="Confirm Password "
            value={user.password}
            type="password"
            onChangeOut={(event) =>
              setUser({ ...user, password: event.target.value })
            }
          />
        </div>
      {/* Currently not included in the database */}
        <DropdownLocation
          question="Which locations are you interested in?"
          onChangeOut={(event) =>
            setUser({ ...user, location: event.target.value })
          }
        />

        <div className="buttons-createuser-row">
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

          <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div className="createUser-popup-container">
              <BsCheckCircle className="check-cirkle-icon" size={65} />

              <div className="createUser-popup-headline">
                <p> Congrats!</p>
              </div>
              <div className="createUser-popup-text">
                <p> Your account has been created successfully! </p>
              </div>
            </div>
          </PopUp>
        </div>
      </div>
    </div>
  );
};
