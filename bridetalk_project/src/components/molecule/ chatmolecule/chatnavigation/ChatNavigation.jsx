import "./chatnavigation.css";
import { BsChatDots } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export const ChatNavigation = () => {
  return (
    <div className="flex-container-chatnavigation">
      <div className="flex-child1-chatnavigation">
        <Link to="/chat1">
          {" "}
          <BsChatDots className="chat-icon" size={150} />
        </Link>
      </div>
      <div
        style={{
          height: "1px",
          width: "100%",
          backgroundColor: "black",
          justifyContent: "center",
        }}
      />
      <div className="flex-child2-chatnavigation">
        <Link to="/findgroups">
          <HiOutlineUserGroup className="groupchat-icon" size={150} />{" "}
        </Link>
      </div>
    </div>
  );
};
