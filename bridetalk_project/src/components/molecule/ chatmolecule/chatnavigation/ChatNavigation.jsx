import "./chatnavigation.css";
import { BsBack, BsChatDots } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ChatNavigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
        {" "}
        <div className="chat-box" onClick={() => navigate("/chat")}>
          <BsChatDots className="chat-icon" />
          <div>Chats </div>
        </div>
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
        <div className="groupchat-box" onClick={() => navigate("/findgroups")}>
          <HiOutlineUserGroup className="groupchat-icon" />{" "}
          <div>Join group chats </div>
        </div>
      </div>
    </div>
  );
};
