import "./livechatcomponent.css";
import Parse from "parse";
import { useParseQuery } from "@parse/react";
import { MessageBoxComponent } from "../../../atoms";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { addMessage } from "../../../../services/parse-functions/_MessageRequest";
import { useChatContext } from "../../../pages/Chat/mainchatpagecomponent/MainChatPageProvider";

export const LiveChatComponent = () => {
  // State variable to hold message text input
  const [messageInput, setMessageInput] = useState(null);
  // Gets the current receiver
  const { currentReciever } = useChatContext();
  const { recieverId, recieverUsername } = currentReciever;
  const { id: senderUserId } = Parse.User.current();

  // Create parse query for live querying using useParseQuery hook
  const parseQuery = new Parse.Query("Message");

  // Get messages that involve both Users
  parseQuery.containedIn("senderObject", [senderUserId, recieverId]);
  parseQuery.containedIn("receiver", [senderUserId, recieverId]);
  
  // Set results ordering
  parseQuery.ascending("createdAt");

  // Include User fields, to enable name getting on list
  parseQuery.includeAll();

  // Declare hook and variables to hold hook responses
  const { results } =
    useParseQuery(parseQuery, {
      enableLocalDatastore: true, // Enables cache in local datastore (default: true)
      enableLiveQuery: true, // Enables live query for real-time update (default: true)
    });

  // Message sender handler
  const sendMessage = async () => {
    addMessage(messageInput, recieverId, senderUserId);
    setMessageInput(null);
  };


  return (
    <div className="flexbox-container-livechat">
      <div className="flexchild1-livechat">
        {recieverUsername && (
          <div className="livechat-headline">{recieverUsername}</div>
        )}

        {!recieverUsername && (
          <div className="livechat-headline">Start a chat with someone!</div>
        )}
        <div className="livechat-line"/>
      </div>

      <div className="for-scroll">
        {results && (
          <div className="flexchild2-livechat">
            {results
              .sort((a, b) => a.get("createdAt") > b.get("createdAt"))
              .map((result) => (
                <MessageBoxComponent
                  result={result}
                  senderUserId={senderUserId}
                />
              ))}
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
};
