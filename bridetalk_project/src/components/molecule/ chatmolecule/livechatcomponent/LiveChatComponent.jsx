import "./livechatcomponent.css";
import Parse from "parse";
import { useParseQuery } from "@parse/react";
import { InputField, MessageBoxComponent, } from "../../../atoms";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { addMessage } from "../../../../services/parse-functions/_MessageRequest";
import { useChatContext } from "../../../pages/Chat/mainchatpagecomponent/MainChatPageProvider";
export const LiveChatComponent = (props) => {

  const { currentReciever } = useChatContext();
  const { recieverId, recieverUsername } = currentReciever;

  const { id: senderUserId } = Parse.User.current();

  // State variable to hold message text input
  const [messageInput, setMessageInput] = useState(null);

  // Create parse query for live querying using useParseQuery hook
  const parseQuery = new Parse.Query("Message");
  // Get messages that involve both Users
  parseQuery.containedIn("senderObject", [
    senderUserId,
    recieverId,
  ]);
  parseQuery.containedIn("receiver", [
    senderUserId,
    recieverId,
  ]);
  // Set results ordering
  parseQuery.ascending("createdAt");

  // Include User fields, to enable name getting on list
  parseQuery.includeAll();

  // Declare hook and variables to hold hook responses
  const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(parseQuery, {
      enableLocalDatastore: true, // Enables cache in local datastore (default: true)
      enableLiveQuery: true, // Enables live query for real-time update (default: true)
    });

  // Message sender handler
  const sendMessage = async () => {
    console.log("sendMessage clicked");
    addMessage(messageInput, recieverId, senderUserId);
    console.log(messageInput);
    setMessageInput(null);
  };

  // Helper to format createdAt value on Message
  const formatDateToTime = (date) => {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  return (
    <div className="flexbox-container-livechat">
      <div className="flexchild1-livechat">
        <div className="livechat-headline">{recieverUsername}</div>
        <div className="livechat-line" />
      </div>
      <div className="livechat-line">
        {results && (
          <div className="messages">
            {results
              .sort((a, b) => a.get("createdAt") > b.get("createdAt"))
              .map((result) => (
                <MessageBoxComponent
                  result={result}
                  senderUserId={senderUserId}
                />
              )
              )}
          </div>
        )}
      </div>
      <div className="flexchild2-livechat">

        <div className="flexchild3-livechat">
          <div className="flexgrandchild1-messagetextinput">
            <InputField
              className="messagetextinput" type="text"
              // text={messageInput}
              onChangeOut={(event => setMessageInput(event.target.value))}>
            </InputField>
          </div>
          <div className="flexgrandchild2-sendmessage-icon">
            <button onClick={() => sendMessage()}>
              <FiSend
                className="sendmessage-icon" size={25}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};


