import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import "./navbar.css";

/*Functional component that creates the navigation bar.*/
export const Navbar = () => {
  
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
            {/* Profile icon */}
          <Link to="/login">
            <div className="profile-icon-column">
              <BsPersonCircle className="profile-icon" size={30}/>
            </div>

          </Link>
            {/* Menu icon */}
            <Link to="/main-page">
            <div className="menu-icon-column">
              <BiMenu className="menu-icon" size={34}/>
              </div>
            </Link>
        </div>
      </div>
    </>
  );
};
