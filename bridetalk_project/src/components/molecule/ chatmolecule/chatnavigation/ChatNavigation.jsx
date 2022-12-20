import React from "react";
import { BsChatDots } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import "./chatnavigation.css";

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
      <div className="chatnavigation-line" />
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
