import {
  ChatNavigation,
  LiveChatComponent,
  ThreadView,
} from "../../../molecule";
import { MainChatPageInit, MainChatPageProvider } from "./MainChatPageProvider";
import "./mainchatpagecomponent.css";

export const MainChatPageComponent = () => {
  return <MainChatPage />
};

const MainChatPage = () => {

  return (
    <MainChatPageProvider>
      <MainChatPageInit>

        <div className="flex-container-chatpage">
          <div className="flex-child1-chatpage">
            <ChatNavigation />
          </div>
          <div className="flex-child2-chatpage">
            <ThreadView />
          </div>
          <LiveChatComponent className="flex-child3-chatpage" />
        </div>

      </MainChatPageInit>
    </MainChatPageProvider>
  )
}
