import React from "react";
import "./dropdownprofile.css";

export const DropdownProfile = () => {
  return (
    <div>
      <div className="drop-down-profile-box">
        <div className="drop-down-profile-text">

          <div className="drop-down-profile-Edit"></div>
            <p> Edit profile</p>
            <div className="drop-down-profile-Help"></div>
            <p> Help</p>
            <div className="drop-down-profile-Logout"></div>
            <p> Log out</p>
          

        </div>
      </div>
    </div>
  );
};
