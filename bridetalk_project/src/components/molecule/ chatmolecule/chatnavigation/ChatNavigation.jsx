import "./chatnavigation.css";
import { BsBack, BsChatDots } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

export const ChatNavigation = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex-container-chatnavigation">
      <div
        className="flex-child1-chatnavigation"
        style={{
          backgroundColor:
            pathname === "/chat"
              ? "var(--global-grey-3)"
              : "var(--global-grey-5)",
        }}
      >
        <Link to="/chat">
          {" "}
          <BsChatDots className="chat-icon" />
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
      <div
        className="flex-child2-chatnavigation"
        style={{
          backgroundColor:
            pathname === "/findgroups"
              ? "var(--global-grey-3)"
              : "var(--global-grey-5)",
        }}
      >
        <Link to="/findgroups">
          <HiOutlineUserGroup className="groupchat-icon" />{" "}
        </Link>
      </div>
    </div>
  );
};
