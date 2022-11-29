import "./livechatcomponent.css";
import Parse from "parse";
import { useParseQuery } from "@parse/react";
import { InputField, MessageBoxComponent, Button } from "../../../atoms";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

export const LiveChatComponent = (props) => {
  console.log(props)
  // State variable to hold message text input
  const [messageInput, setMessageInput] = useState("");

  // Create parse query for live querying using useParseQuery hook
  const parseQuery = new Parse.Query("Message");

  // Get messages that involve both Users
  parseQuery.containedIn("sender", [
    props.senderUserId,
    props.receiverUserId,
  ]);

  parseQuery.containedIn("receiver", [
    props.senderUserId,
    props.receiverUserId,
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
    try {
      const messageText = messageInput;
      console.log(messageText + " this is the messagetext")

      // Get sender and receiver User Parse objects
      const senderUserObjectQuery = new Parse.Query("User");

      senderUserObjectQuery.equalTo("objectId", props.senderUserId);

      let senderUserObject = await senderUserObjectQuery.first();
      console.log("this is senderuserobject ", senderUserObject)

      // creates the query 
      const receiverUserObjectQuery = new Parse.Query("User");

      receiverUserObjectQuery.equalTo("objectId", props.receiverUserId);
      // query runs
      let receiverUserObject = await receiverUserObjectQuery.first();
      console.log("this is receiverUserObject ", receiverUserObject)

      // Create new Message object and save it
      let Message = new Parse.Object("Message");
      Message.set("text", messageText);
      Message.set("senderObject", senderUserObject);
      Message.set("receiver", receiverUserObject);
      Message.save();

      // Clear input
      setMessageInput();

    } catch (error) {
      alert(error);
    }
  };

  // Helper to format createdAt value on Message
  const formatDateToTime = (date) => {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };
  return (
    <div className="flexbox-container-livechat">
      <div className="flexchild1-livechat">
        <div className="livechat-headline">{`${props.senderUserName} sending, ${props.receiverUserName} receiving!`}</div>
        <div
          style={{
            height: "1px",
            width: "90%",
            marginLeft: "5%",
            backgroundColor: "black",
            justifyContent: "center",
          }}
        />
        <MessageBoxComponent 
          text={"Hey"}/>
        <MessageBoxComponent
          text={"Your message has been sent"}/>
        <MessageBoxComponent
          text={"Your loooooooooooooooooong message has been sent"}/>
      </div>
      <div className="flexchild2-livechat">
        <div className="flexchild1-messagetextinput">
          <InputField
            className="messagetextinput"
            value="Aa"
            type="text"
          ></InputField>
        </div>
        <div className="flexchild2-sendmessage-icon">
        <Button
          handleClick={sendMessage}>

          <FiSend className="sendmessage-icon" size={15} />
        </Button>
        </div>
      </div>
    </div>
  );
};
