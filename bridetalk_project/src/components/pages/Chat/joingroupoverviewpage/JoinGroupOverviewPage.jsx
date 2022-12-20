import "./joingroupoverviewpage.css";
import { Button } from "../../../atoms";

import { ChatNavigation, JoinGroupChatComponent } from "../../../molecule";
import { Navigate, useNavigate } from "react-router-dom";

export const JoinGroupOverviewPage = () => {
  let navigate = useNavigate();
  return (
    <div className="flex-container-groupchatpage">
      <div className="flex-child1-groupchatpage">
        <ChatNavigation></ChatNavigation>
      </div>
      <div className="flex-child2-groupchatpage">
        <JoinGroupChatComponent> </JoinGroupChatComponent>

        <div className="group-goBack-button">
          <Button
            color={"var(--global-grey-4)"}
            text={"Go back"}
            handleClick={() => navigate(-1)}
          />
        </div>
      </div>
    </div>
  );
};
