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
              <div class="logo-image">
                <img src="../images/logo_black.png"></img>
              </div>
            </a>
          </Link>
        </div>

        {/* Right side of navigation bar */}
        <div class="topnav-right">
            {/* Profile icon */}
          <Link to="/login">
            <div class="profile">
              <BsPersonCircle className="profile-icon" size={42}/>
            </div>

          </Link>
            {/* Menu icon */}
            <Link to="/main-page">
            <div class="menu">
              <BiMenu className="menu-icon" size={42}/>
              </div>
            </Link>
        </div>
      </div>
    </>
  );
};
