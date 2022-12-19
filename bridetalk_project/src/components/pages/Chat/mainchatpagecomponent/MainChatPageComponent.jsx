import "./mainchatpagecomponent.css";
import {
  ChatNavigation,
  LiveChatComponent,
  ThreadView,
} from "../../../molecule";
import { ChatSetup } from "../ChatSetUp";
import { MainChatPageInit, MainChatPageProvider } from "./MainChatPageProvider";

export const MainChatPageComponent = () => {

  return <MainChatPage />
};

const MainChatPage = () => {

  return (
    <MainChatPageProvider>
      <MainChatPageInit>
      <div className="flex-container-chatpage">
      <div className="flex-child1-chatpage">
        <ChatNavigation/>
      </div>
      <div className="flex-child2-chatpage">
        <ThreadView/>
      </div>
      <LiveChatComponent />
      {/* <LiveChatComponent props={} /> */}
      {/* <ChatSetup className="flex-child3-chatpage"/> */}
    </div>
      </MainChatPageInit>
    </MainChatPageProvider>
  )
}
