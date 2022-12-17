import { Link, useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
import { PopUp } from "../../popUp/PopUp";
import { Button } from "../../../atoms";
import "./navbar.css";
import { logout, getCurrentUser } from "../../../../services/parse-functions";
import Parse, { User } from 'parse'
/*Functional component that creates the navigation bar.*/
export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [username, setUsername] = useState(""); 
  const [buttonPopup, setButtonPopup] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  

  const doLogOut = async () => {
    try {
      await logout(Parse.User.current());
      setButtonPopup(false)
      navigate('/');
    } catch (error) {
      console.log("Error loggin user out");
    }
  }

  const currentuser = Parse.User.current();
  // const username = currentuser.getUsername();
  return (
    <>
      <div className="topnav">
        {/* Right side of the navigation bar */}
        <div className="topnav-left">
          {/* Logo leads back to homepage */}
          <Link to="/">
            <div className="navbar-brand">
              <div className="logo-image">
                <img src="../images/logo.png"></img>
              </div>
            </div>
          </Link>
        </div>

        {/* Right side of navigation bar */}
        <div className="topnav-right">
          <div className="nav-container">
          {!currentuser &&
            <div className="text-navbar"> 
            Hey stranger!
            </div>
          }

          {currentuser &&
            <div className="text-navbar"> 
            Hey, {currentuser.get('username')}!
            </div>
          }
            
            <div className="profile-icon">
              <BsPersonCircle
                size={35}
                onClick={handleClick}
                color={"var(--global-black-4)"}
              />
            </div>


            <div style={{ visibility: isVisible ? "visible" : "hidden" }}>
              <div className="nav-dropdown">
                <ul>
                  <li>Edit profile</li>
                  <li>Help</li>
                  <li onClick={() => setButtonPopup(true)}>Log out </li>
                </ul>
              </div>

              <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className="nav-popUp-container">
                  <p> Are you sure you want to sign out? </p>

                  <div className="nav-popUp-btn">
                    <Button
                      color={"var(--global-grey-4)"}
                      text={"Cancel"}
                      handleClick={() => setButtonPopup(false)}
                    />

                    <Button
                      color={"var(--global-primary-2)"}
                      text={"Sign out"}
                      handleClick={doLogOut}
                    />
                  </div>
                </div>
              </PopUp>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
