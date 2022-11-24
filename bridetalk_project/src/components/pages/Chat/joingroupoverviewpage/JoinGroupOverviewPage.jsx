import "./joingroupoverviewpage.css";
import { Button } from "../../../atoms";

import { ChatNavigation, JoinGroupChatComponent } from "../../../molecule";

export const JoinGroupOverviewPage = () => {
  return (
    <div className="flex-container-groupchatpage">
      <div className="flex-child1-groupchatpage">
        <ChatNavigation></ChatNavigation>
      </div>
      <div className="flex-child2-groupchatpage">
        <JoinGroupChatComponent> </JoinGroupChatComponent>

        <div className="group-goBack-button">
          <Button color={"var(--global-grey-4)"} text={"Go back"} />
        </div>
      </div>
    </div>
  );
};
