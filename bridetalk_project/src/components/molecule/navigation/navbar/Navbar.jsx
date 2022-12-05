import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

import "./navbar.css";
import { DropdownProfile } from "../../../atoms";

/*Functional component that creates the navigation bar.*/
export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="topnav">
        {/* Right side of the navigation bar */}
        <div className="topnav-left">
          {/* Logo leads back to homepage */}
          <Link to="/">
            <a className="navbar-brand">
              <div className="logo-image">
                <img src="../images/logo_black.png"></img>
              </div>
            </a>
          </Link>
        </div>

        {/* Right side of navigation bar */}
        <div className="topnav-right">
          <div className="nav-container">
            <button
              type="button"
              class="nav-profile-button"
              onClick={handleClick}
            >
              <div className="profile-icon-column2">
                <BsPersonCircle className="profile-icon" size={35} />
              </div>
            </button>
            <div style={{ visibility: isVisible ? "visible" : "hidden" }}>
              <div class="nav-dropdown">
                <ul>
                  <li>Edit profile</li>
                  <li>Help</li>
                  <li>Log out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/*    
Profile icon
<Link to="/login">
<div className="profile-icon-column">
  <BsPersonCircle className="profile-icon" size={30} />
</div>
</Link>
Menu icon 
<Link to="/main-page">
<div className="menu-icon-column">
  <BiMenu className="menu-icon" size={34} />
</div>
</Link>
*/
