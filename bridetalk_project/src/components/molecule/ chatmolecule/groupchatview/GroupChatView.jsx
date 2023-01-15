import Parse from "parse";
import { useNavigate } from "react-router-dom";
import { useParseQuery } from "@parse/react";
import { GroupMessageBoxComponent } from "../../../atoms";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { addMessageToAllUsers } from "../../../../services/parse-functions/_MessageRequest";
import { useLocation } from "react-router-dom";
import "./groupchatview.css";
import { IoIosArrowRoundBack } from "react-icons/io"

export const GroupChatView = (props) => {
  let navigate = useNavigate();
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
    addMessageToAllUsers(messageInput, senderusername, theme);
    console.log(messageInput);
    setMessageInput("");
  };

  return (
    <div className="flexbox-container-groupchatpage">

      <div className="flexchild1-headline-group">
        <IoIosArrowRoundBack className="button-goback-group"
          color={"var(--global-black-1)"}
          size={50}
          onClick={() => navigate(-1)}
        />
        {theme && <div className="livechatforgroup-headline">{theme}</div>}
      </div>
      <div className="groupchat-line" />

      <div className="for-scroll-group">
        {results && (
          <div className="flexchild2-groupchat">
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

      <div className="flexchild3-groupchat">
        <div className="flexgrandchild1-messagetextinput-g">
          <textarea
            className="messagetextinput"
            type="text"
            value={messageInput}
            onChange={(event) => setMessageInput(event.target.value)}
          ></textarea>
        </div>
        <div className="flexgrandchild2-sendmessage-icon-g">
          <FiSend
            className="sendmessage-icon"
            size={25}
            onClick={() => sendMessage()}
          />
        </div>
      </div>
    </div>
  );

};

