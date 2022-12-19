import Parse from "parse";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  InputField,
  Button,
} from "../../../../atoms";
import { signIn } from "../../../../../services/parse-functions";

import { useAuth } from "../../core/Auth";
import "./loginpage.css";

export const LoginPage = () => {
  let navigate = useNavigate();

  const { setCurrentUser, login } = useAuth();
  const [user, setUser] = useState({});

  const doLogin = async () => {
    try {
      await login(user);
      setCurrentUser(await Parse.User.current());

      navigate("/chat");
      alert(`Success! You are now logged in and ready to chat`);
    } catch (error) {
      console.log("Error loggin user in. ");
      alert(`Error! ${error.message}`);
    }
  };

  return (
    <>
      <div className="login-form-container">
        <div className="log-in-headline"> Log in </div>
        <div className="link-to-signup">
          {" "}
          Not a user? Create a user
          <Link to="/sign-up"> here</Link>
        </div>

        <div className="login-input-fields">
          <InputField
            text="Username"
            value={user.username}
            onChangeOut={(event) => {
              setUser({ ...user, username: event.target.value });
            }}
          />
          <InputField
            type="password"
            text="Password"
            value={user.password}
            onChangeOut={(event) => {
              setUser({ ...user, password: event.target.value });
            }}
          />
        </div>

        <div className="link-forgot-password">
          <Link to="/reset"> Forgot password?</Link>
        </div>

        <Button text={"Let me chat"} handleClick={doLogin} />
      </div>
    </>
  );
};
