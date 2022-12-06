import "./mainchatpagecomponent.css";
import {
  ChatNavigation,
  ThreadView,
  LiveChatComponent,
} from "../../../molecule";

export const MainChatPageComponent = () => {
  return (
    <div className="flex-container-chatpage">
      <div className="flex-child1-chatpage">
        <ChatNavigation></ChatNavigation>
      </div>
      <div className="flex-child2-chatpage">
        <ThreadView></ThreadView>
      </div>

      <LiveChatComponent className="flex-child3-chatpage"></LiveChatComponent>
    </div>
  );
};
