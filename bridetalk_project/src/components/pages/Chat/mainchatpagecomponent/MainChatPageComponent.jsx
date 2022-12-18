import "./mainchatpagecomponent.css";
import {
  ChatNavigation,
  ThreadView,
} from "../../../molecule";
import { ChatSetup } from "../ChatSetUp";

export const MainChatPageComponent = () => {

  return (
    <div className="flex-container-chatpage">
      <div className="flex-child1-chatpage">
        <ChatNavigation/>
      </div>
      <div className="flex-child2-chatpage">
        <ThreadView/>
      </div>
      <ChatSetup className="flex-child3-chatpage"/>
    </div>
  );
};
