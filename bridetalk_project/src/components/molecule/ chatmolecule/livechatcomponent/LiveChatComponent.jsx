import "./livechatcomponent.css";
import Parse from "parse";
import { useParseQuery } from "@parse/react";
import { InputField, MessageBoxComponent, Button } from "../../../atoms";
import { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { addMessage } from "../../../../services/parse-functions/_MessageRequest";
import { Tooltip } from "antd";
import { SyncOutlined } from "@ant-design/icons";
export const LiveChatComponent = (props) => {
//   // State variable to hold message text input
//   const [messageInput, setMessageInput] = useState("");
//   const [receiver, setReceivername] = useState(null);

//   // Create parse query for live querying using useParseQuery hook
//   const messageParseQuery = new Parse.Query("Message");

//   // Get messages that involve both Users
//   messageParseQuery.containedIn("sender", [
//     props.senderUserId,
//     props.receiverUserId,
//   ]);

//   messageParseQuery.containedIn("receiver", [
//     props.senderUserId,
//     props.receiverUserId,
//   ]);

//   // Set results ordering
//   messageParseQuery.ascending("createdAt");

//   // Include User fields, to enable name getting on list
//   messageParseQuery.includeAll();

//   // Declare hook and variables to hold hook responses
//   const { isLive, isLoading, isSyncing, results, count, error, reload } =
//     useParseQuery(messageParseQuery, {
//       enableLocalDatastore: true, // Enables cache in local datastore (default: true)
//       enableLiveQuery: true, // Enables live query for real-time update (default: true)
//     });

//   const sendMessage = () => {
//     console.log("clicked");
//     addMessage(messageInput, receiver.id, props.senderUserId);
//     setMessageInput();
//   };

//   // Helper to format createdAt value on Message
//   const formatDateToTime = (date) => {
//     return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//   };

//   useEffect(() => {
//     init();
// }, [])

// const init = async () => {
//     const receiver = await getUser(props.receiverUserId);
//     console.log(receiver);
//     setReceivername(receiver.get('username'))
// };

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
  console.log("clicked");
  addMessage(messageInput, props.receiverUserId, props.senderUserId);
  setMessageInput("");
};

// Helper to format createdAt value on Message
const formatDateToTime = (date) => {
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

return (
  <div>
   <div className="flexbox-container-livechat">
      <div className="flexchild1-livechat">
        <div className="livechat-headline">{props.receivername}</div>
        <div className="livechat-line" />
      </div>
      <div className="flexchild2-livechat">
       {/* MESSAGE BOXES GOES HERE */}
       <MessageBoxComponent>

       </MessageBoxComponent>
      </div>
      <div className="flexchild3-livechat">
        <div className="flexgrandchild1-messagetextinput">
        <InputField
        value={messageInput}
        onChangeOut={(event) => setMessageInput(event.target.value)}
        placeholder={"Your message..."}
      />
          {/* <textarea 
          className="messagetextinput" type="text" /> */}
        </div>
        <div className="flexgrandchild2-sendmessage-icon">
        <button onClick={()=>sendMessage()}>
          <FiSend 
          className="sendmessage-icon" size={25}
        />
        </button>
        </div>
      </div>
    </div>
    <div className="flex_between">
      {/* <h2 className="list_heading">{`${props.senderUserName} sending, ${props.receiverUserName} receiving!`}</h2> */}
      <Tooltip title="Reload">
        <Button
          handleClick={reload}
          type="primary"
          shape="circle"
          icon={<SyncOutlined />}
        />
      </Tooltip>
    </div>
    {results && (
      <div className="messages">
        {results
          .sort((a, b) => a.get("createdAt") > b.get("createdAt"))
          .map((result) => (
            <div
              key={result.id}
              className={
                result.get("sender").id === props.senderUserId
                  ? "message_sent"
                  : "message_received"
              }
            >
              <p className="message_bubble">{result.get("text")}</p>
              <p className="message_time">
                {formatDateToTime(result.get("createdAt"))}
              </p>
              <p className="message_name">
                {result.get("sender").get("username")}
              </p>
            </div>
          ))}
      </div>
    )}
    <div className="new_message">
      <h2 className="new_message_title">New message</h2>
   
      <Button
        color={"#208AEC"}
        handleClick={() => sendMessage()}
        text={"Send message"}
      >
         <div className="flexbox-container-livechat">
      <div className="flexchild1-livechat">
        <div className="livechat-headline">{props.receivername}</div>
        <div className="livechat-line" />
      </div>
      <div className="flexchild2-livechat">
       {/* MESSAGE BOXES GOES HERE */}
       <MessageBoxComponent>

       </MessageBoxComponent>
      </div>
      <div className="flexchild3-livechat">
        <div className="flexgrandchild1-messagetextinput">
        <InputField
         className="messagetextinput" type="text" 
         value={messageInput}
         onChangeOut={(event => setMessageInput(event.target.value))}>

        </InputField>
          {/* <textarea 
          className="messagetextinput" type="text" /> */}
        </div>
        <div className="flexgrandchild2-sendmessage-icon">
        <button onClick={()=>sendMessage()}>

          <FiSend 
          className="sendmessage-icon" size={25}
        />
        </button>
        </div>
      </div>
    </div>
      </Button>
    </div>
    <div>
      {isLoading && <p>{"Loading…"}</p>}
      {isSyncing && <p>{"Syncing…"}</p>}
      {isLive ? <p>{"Status: Live"}</p> : <p>{"Status: Offline"}</p>}
      {error && <p>{error.message}</p>}
      {count && <p>{`Count: ${count}`}</p>}
    </div>
  </div>

  

);
};


