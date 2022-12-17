import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { PopUp } from "../../popUp/PopUp";
import { Button } from "../../../atoms";
import "./navbar.css";
import { DropdownProfile } from "../../../atoms";

/*Functional component that creates the navigation bar.*/
export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="topnav">
        {/* Right side of the navigation bar */}
        <div className="topnav-left">
          {/* Logo leads back to homepage */}
          <Link to="/">
            <div className="navbar-brand">
              <div className="logo-image">
                <img src="../images/logo_black.png"></img>
              </div>
            </div>
          </Link>
        </div>

        {/* Right side of navigation bar */}
        <div className="topnav-right">
          <div className="nav-container">
            <button
              type="button"
              className="nav-profile-button"
              onClick={handleClick}
            >
              <div className="profile-icon-column2">
                <BsPersonCircle className="profile-icon" size={35} />
              </div>
            </button>
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
                      text={"Sign Out"}
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
