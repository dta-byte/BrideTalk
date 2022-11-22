import { ChatWindows, ChatView, MessageView } from "../../molecule";
import "./mainchatpage.css";

export const MainChatPage = () => {
  return (
    <div className="flex-container-chatpage">
      <div className="flex-child1-chatpage">
        <ChatWindows></ChatWindows>
      </div>
      <div className="flex-child2-chatpage">
        <ChatView></ChatView>
      </div>
      <div className="flex-child3-chatpage">
        <MessageView></MessageView>
      </div>
    </div>
  );
};
//mainchatpagecomponent
