import "./chatwindows.css";
import { BsChatDots } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";

export const ChatWindows = () => {
  return (
    <div className="flex-container-chatwindows">
      <div className="flex-chat-icon">
        <BsChatDots className="chat-icon" size={150} />
      </div>

      <div className="flex-groupchat-icon-">
        <GrGroup className="chat-icon" size={150} />
      </div>
    </div>
  );
};
//G
