import { Link, useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
import { PopUp } from "../../popUp/PopUp";
import { Button } from "../../../atoms";
import "./navbar.css";
import { useAuth } from "../../../pages/auth/core/Auth";
import { logout, getCurrentUser } from "../../../../services/parse-functions";
import Parse, { User } from "parse";

/*Functional component that creates the navigation bar.*/
export const Navbar = () => {
  const { logout } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  const doLogOut = async () => {
    try {
      await logout();
      setButtonPopup(false);
      navigate("/");
    } catch (error) {
      console.log("Error loggin user out");
    }
  };

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
            {!currentuser && <div className="text-navbar">Hey stranger!</div>}

            {currentuser && (
              <div className="text-navbar">
                Hey, {currentuser.get("username")}!
              </div>
            )}

            {/* profile icon in the right side of navigation bar */}
            <div className="profile-icon">
              <BsPersonCircle
                size={35}
                onClick={handleClick}
                color={"var(--global-black-4)"}
              />
            </div>

            {/* drop-down will be visible when clicking on the profile icon */}
            <div style={{ visibility: isVisible ? "visible" : "hidden" }}>
              <div className="nav-dropdown">
                {currentuser && (
                  <ul className="nav-dropdown-ul">
                    <li onClick={() => navigate("/chat")}>My chats</li>
                    <li>Edit profile</li>
                    <li>Help</li>
                    <li onClick={() => setButtonPopup(true)}>Log out </li>
                  </ul>
                )}
                {!currentuser && (
                  <ul className="nav-dropdown-ul">
                    <li onClick={() => navigate("/login")}>Login</li>
                    <li onClick={() => navigate("/sign-up")}>Sign up</li>
                  </ul>
                )}
              </div>

              {/* Pop up when clicking on logout indside the dropdown*/}
              <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className="nav-popUp-container">
                  <p> Are you sure you want to sign out? </p>
                  <div className="nav-logout-popUp-btn">
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
