import Parse from 'parse';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  InputField,
  Button,
} from "../../../../atoms";

import "./loginpage.css";


export const LoginPage = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  // Function that will return current user and also update current username
  const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    // Update state variable holding current user
    setCurrentUser(currentUser);
    return currentUser;
  };

  const doUserLogIn = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    try {
      const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
      // logIn returns the corresponding ParseUser object
      alert(
        `Success! User ${loggedInUser.get(
          'username'
        )} has successfully signed in!`
      );
      // To verify that this is in fact the current user, `current` can be used
      const currentUser = await Parse.User.current();
      console.log(loggedInUser === currentUser);
      // Clear input fields
      setUsername('');
      setPassword('');
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error) {
      // Error can be caused by wrong parameters or lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const doUserLogOut = async function () {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        alert('Success! No user is logged in anymore!');
      }
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  return (
    <>

    { currentUser === null &&
    <div className="login-form-container">

      <div className="log-in-headline"> Log in </div>

      <div className="link-to-signup">
        Not a user? Create a user <Link to="/sign-up"> here</Link>
      </div>



      <div className="login-input-fields">
        <InputField
          text='Username'
          value={username}
          onChangeOut={(event) => {
            setUsername(event.target.value)
          }}
        />
        <InputField
          type='password'
          text="Password"
          value={password}
          onChangeOut={(event) => {
            setPassword(event.target.value)
          }}
        />
      </div>

      <div className="link-forgot-password">
        <Link to="/reset"> Forgot password?</Link>
      </div>

      <Button
        text={"Let me chat"}
        handleClick={() => doUserLogIn()}
      />
    </div>
    }

    {/* TODO: Der skal laves CSS på dette. Men det er det, som vises, når en user logger in */}
    {currentUser !== null &&
        (<div className="container">
          <h2 className="heading">{'User Screen'}</h2>
        
          <h2 className="heading">{`Hello ${currentUser.get('username')}!`}</h2>
          <div className="form_buttons">
            <Button
              text={"Go to homepage"}
              handleClick={() => navigate("/")}
              />
              <Button
              text={"Logout"}
              handleClick={() => doUserLogOut()}
              />
          
          </div>
        </div>)
      }
    </>
  );
};
