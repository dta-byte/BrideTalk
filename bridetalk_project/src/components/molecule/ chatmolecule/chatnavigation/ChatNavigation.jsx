import "./chatnavigation.css";
import { BsChatDots } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";

export const ChatNavigation = () => {
  return (
    <div className="flex-container-chatnavigation">
      <div className="flex-chat-icon">
        <BsChatDots className="groupchat-icon" size={150} />
      </div>

      <div>
        <GrGroup className="chat-icon" size={150} />
      </div>
    </div>
  );
};
