import React, { useState } from "react";
import { Button, InputField } from "../../atoms";
import Parse from "parse";
import { useParseQuery } from "@parse/react";

export const LiveChat = (props) => {
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
    <div>
      <div className="flex_between">
        <h2 className="list_heading">{`${props.senderUserName} sending, ${props.receiverUserName} receiving!`}</h2>

        <Button
          handleClick={reload}
          className="button-back"
          color={"var(--global-grey-4)"}
          text={"Reload"}
        // icon={<SyncOutlined />}
        />
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
        <InputField
          className="form_input"
          value={messageInput}
          onChangeOut={(event) => setMessageInput(event.target.value)}
          text={"Your message..."}
        />
        <Button
          text={"Send message"}
          className="form_button"
          color={"var(--global-primary-2)"}
          handleClick={sendMessage}
        />

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