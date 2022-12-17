import "./mainchatpagecomponent.css";
import {
  ChatNavigation,
  ThreadView,
  LiveChatComponent,
} from "../../../molecule";
import { useAuth } from "../../auth/core/Auth";

export const MainChatPageComponent = () => {
  // const { currentUser } = useAuth();
  return (
    <div className="flex-container-chatpage">
      <div className="flex-child1-chatpage">
        <ChatNavigation/>
      </div>
      <div className="flex-child2-chatpage">
        <ThreadView/>
      </div>
      <LiveChatComponent className="flex-child3-chatpage"></LiveChatComponent>
    </div>
  );
};
