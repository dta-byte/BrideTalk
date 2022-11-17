import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  InputField,
  DropdownLocation,
  Button,
} from "../../../atoms";
import "./createuserform.css";

import Parse from 'parse'

export const CreateUserForm = () => {
  let navigate = useNavigate();

  const goBack = () => {
    let path = navigate(-1);
    navigate(path);
  };

  const [username, setUsername] = useState("")
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [location, setLocation] = useState("")

  //Todo: If user does not input a valid e-mail the user should not be created/save, and a alert should be send. 
  
  const addUser = async function() {
      const userNameValue = username;
      const passWordValue = password;

   
    try {
      // create a new Parse User instance and since the signUp method returns a Promise, we need to call it using await
      const createdUser = await Parse.User.signUp(userNameValue, passWordValue);

      createdUser.set('username', username)
      createdUser.set('firstname', firstName)
      createdUser.set('lastname', lastName)
      createdUser.set('email', email)
      createdUser.set('password', password)
      createdUser.set('location', location)

      alert("Succes! User "+ createdUser.getUsername() + " was created");
      createdUser.save();
      return true;

    } catch (error) {
      console.log('Error saving new User: ', error);
      return false;
    };
  };

  return (
    <div>
      <div className="create-user-form-container">
        <div className="sign-up-headline">
          Sign up to Bride Talk
          </div>
        <div className="link-to-login">
          Already a user? <Link to="/login"> Log in here </Link>
        </div>
        <InputField
          text="Username " 
          value={username} 
          onChangeOut={(event) => {
            setUsername(event.target.value)
            // console.log(event.target.value)
          } } />

        <InputField 
          text="First Name " 
          value={firstName} 
          onChangeOut={(event) => {
            setFname(event.target.value)}} />

        <InputField 
          text="Last Name " 
          value={lastName}
          onChangeOut={(event) => {
            setLname(event.target.value)}} />

        <InputField 
          text="Email " 
          value={email} 
          type="email"
          onChangeOut={(event) => {
            setEmail(event.target.value)}} />

        <InputField 
          text="Password "
          value={password}
          type="password"
          onChangeOut={(event) => { 
            setPasword(event.target.value)}} />

        <InputField 
          text="Confirm Password " 
          value={password} 
          type="password"
          onChangeOut={(event) => {
            setPasword(event.target.value)}} />

        <DropdownLocation question="Which locations are you interested in?" onChangeOut={setLocation}/>

        <div className="buttons-row">

          <Button
          className="button-back"
            color={"var(--global-grey-4)"}
            text={"Go back"}
            handleClick={goBack} />

          <Button
            color={"var(--global-primary-2)"}
            text={"Sign me up"}
            handleClick={() => addUser(username, password)}
          />
        </div>
      </div>
    </div>
  );
};
