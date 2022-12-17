import "./livechatcomponent.css";
import Parse from "parse";
import { useParseQuery } from "@parse/react";
import { InputField, MessageBoxComponent, Button } from "../../../atoms";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { addMessage } from "../../../../services/parse-functions/_MessageRequest";


export const LiveChatComponent = (props) => {
  // State variable to hold message text input
  const [messageInput, setMessageInput] = useState("");

  // Create parse query for live querying using useParseQuery hook
  const messageParseQuery = new Parse.Query("Message");

  // Get messages that involve both Users
  messageParseQuery.containedIn("sender", [
    props.senderUserId,
    props.receiverUserId,
  ]);

  messageParseQuery.containedIn("receiver", [
    props.senderUserId,
    props.receiverUserId,
  ]);

  // Set results ordering
  messageParseQuery.ascending("createdAt");

  // Include User fields, to enable name getting on list
  messageParseQuery.includeAll();

  // Declare hook and variables to hold hook responses
  const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(messageParseQuery, {
      enableLocalDatastore: true, // Enables cache in local datastore (default: true)
      enableLiveQuery: true, // Enables live query for real-time update (default: true)
    });

    const sendMessage = () => {
      addMessage(
        messageInput, 
        props.receiverUserId,
        props.senderUserId,)
      setMessageInput();
    }


  // Helper to format createdAt value on Message
  const formatDateToTime = (date) => {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  return (
    <div className="flexbox-container-livechat">
      <div className="flexchild1-livechat">

        <div className="livechat-headline">Username</div>
        <div className="livechat-line" />
      </div>
      <div className="flexchild2-livechat">
        <MessageBoxComponent text={"Hey"}></MessageBoxComponent>
        <MessageBoxComponent
          text={"Your message has been sent"}
        ></MessageBoxComponent>
        <MessageBoxComponent
          text={"Your loooooooooooooooooong message has been sent"}
        ></MessageBoxComponent>
        <MessageBoxComponent
          text={"Your loooooooooooooooooong message has been sent"}
        ></MessageBoxComponent>
        <MessageBoxComponent
          text={"Your loooooooooooooooooong message has been sent"}
        ></MessageBoxComponent>
        <MessageBoxComponent
          text={"Your loooooooooooooooooong message has been sent"}
        ></MessageBoxComponent>
        <MessageBoxComponent
          text={"Your loooooooooooooooooong message has been sent"}
        ></MessageBoxComponent>

        <MessageBoxComponent
          text={"Your loooooooooooooooooong message has been sent"}/>
      </div>
      <div className="flexchild3-livechat">
        <div className="flexgrandchild1-messagetextinput">
          <textarea
            className="messagetextinput"
            type="text"

          ></textarea>
        </div>

        <div className="flexgrandchild2-sendmessage-icon">
          <FiSend className="sendmessage-icon" size={25} />

        </div>
      </div>
    </div>
  );
};
