import Parse from "parse";
import { useParseQuery } from "@parse/react";
import { GroupMessageBoxComponent } from "../../../atoms";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { addMessageToAllUsers } from "../../../../services/parse-functions/_MessageRequest";
import { useChatContext } from "../../../pages/Chat/mainchatpagecomponent/MainChatPageProvider";
import { useLocation } from "react-router-dom";

export const GroupChatView = (props) => {
  const location = useLocation();
  const theme = location.state.theme;
  // const currentUser = location.state.user;
  const senderusername = location.state.username;

  const [messageInput, setMessageInput] = useState("");

  // Create parse query for live querying using useParseQuery hook
  const parseQueryPublic = new Parse.Query("PublicGroupChat");

  parseQueryPublic.ascending("createdAt");

  // Include User fields, to enable name getting on list
  parseQueryPublic.includeAll();

  // Declare hook and variables to hold hook responses
  const { results } = useParseQuery(parseQueryPublic, {
    enableLocalDatastore: true, // Enables cache in local datastore (default: true)
    enableLiveQuery: true, // Enables live query for real-time update (default: true)
  });

  // Message sender handler
  const sendMessage = async () => {
    console.log("sendMessage to all clicked");
    addMessageToAllUsers(messageInput, senderusername, theme);
    console.log(messageInput);
    setMessageInput("");
  };

  return (
    <div className="flexbox-container-livechat">
      <div className="flexchild1-livechat">
        {theme && <div className="livechat-headline">{theme}</div>}
        <div className="livechat-line" />
      </div>

      <div className="for-scroll">
        {results && (
          <div className="flexchild2-livechat">
            {results
              .sort((a, b) => a.get("createdAt") > b.get("createdAt"))
              .map((result) =>
                result.get("Theme") === theme ? (
                  <GroupMessageBoxComponent
                    result={result}
                    senderusername={senderusername}
                  />
                ) : (
                  ""
                )
              )}
          </div>
        )}
      </div>

      <div className="flexchild3-livechat">
        <div className="flexgrandchild1-messagetextinput">
          <textarea
            className="messagetextinput"
            type="text"
            value={messageInput}
            onChange={(event) => setMessageInput(event.target.value)}
          ></textarea>
        </div>
        <div className="flexgrandchild2-sendmessage-icon">
          <FiSend
            className="sendmessage-icon"
            size={25}
            onClick={() => sendMessage()}
          />
        </div>
      </div>
    </div>
  );
  return <div> Cuurently in construction</div>;
};
export default GroupChatView;
