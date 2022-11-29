import React, { useState } from "react";

import { Button, InputField } from "../../atoms";
import Parse from "parse";
import { LiveChatComponent } from "../../molecule";

export const ChatSetup = () => {
  // State variables holding input values and results
  const [senderUserInput, setSenderUserInput] = useState("");
  const [senderUserId, setSenderUserId] = useState(null);
  const [receiverUserInput, setReceiverUserInput] = useState("");
  const [receiverUserId, setReceiverUserId] = useState(null);

  // Create or retrieve User objects and start LiveChat component
  const startLiveChat = async () => {
    const senderUserName = senderUserInput;
    const receiverUserName = receiverUserInput;
    console.log("this is the reciever username: ", receiverUserName)
    console.log("this is the sender username: ", senderUserName)

    // Check if user informed both Users
    if (senderUserName === null || receiverUserName === null) {
      alert("Please inform both sender and receiver users!");

      console.log(senderUserName, receiverUserName, " is null")

      return false;
    }

    // Check if sender User already exists, if not create new parse object
    let senderUserObject = null;
    try {
      const senderParseQuery = new Parse.Query("User");
      senderParseQuery.equalTo("username", senderUserName);
      const senderParseQueryResult = await senderParseQuery.first();
      console.log("HVAD ER DETTE?", senderParseQueryResult)

      if (
        senderParseQueryResult !== undefined &&
        senderParseQueryResult !== null
      ) {
        senderUserObject = senderParseQueryResult;
        console.log(senderUserObject + " SENDER does exist ")
      } else {
        senderUserObject = new Parse.Object("User");
        senderUserObject.set("username", senderUserName);
        senderUserObject = await senderUserObject.save();
        console.log(senderUserObject + " SENDER IS A NEW new user ")
      }
    } catch (error) {
      alert(error);
      return false;
    }

    // Check if receiver User already exists, if not create new parse object
    let receiverUserObject = null;
    try {
      const receiverParseQuery = new Parse.Query("User");
      receiverParseQuery.equalTo("username", receiverUserName);
      const receiverParseQueryResult = await receiverParseQuery.first();
      console.log("HVAD ER DETTE? RECIEVER", receiverParseQueryResult)

      if (
        receiverParseQueryResult !== undefined &&
        receiverParseQueryResult !== null
      ) {
        receiverUserObject = receiverParseQueryResult;
        console.log(receiverUserObject + " RECIEVER does exist ")
      } else {
        receiverUserObject = new Parse.Object("User");
        receiverUserObject.set("username", receiverUserName);
        receiverUserObject = await receiverUserObject.save();
        console.log(receiverUserObject + " RECIEVER IS A new user ")
      }
    } catch (error) {
      alert(error);
      return false;
    }

    // Set User objects ids, so live chat component is instantiated
    setSenderUserId(senderUserObject.id);
    setReceiverUserId(receiverUserObject.id);
    return true;
  };

  return (
    <div>
      <div className="container-bacground">
        {senderUserId === null && receiverUserId === null && (
          <div>
            <InputField
              type="text"
              value={senderUserInput}
              onChangeOut={(event) => setSenderUserInput(event.target.value)}
              text={"Sender"}
            />
            <InputField
              type="text"
              value={receiverUserInput}
              onChangeOut={(event) => setReceiverUserInput(event.target.value)}
              text={"Receiver"}
            />
            <Button
              text={"Start chatting!"}
              color={"var(--global-primary-2)"}
              handleClick={() => startLiveChat() }
              />
          </div>
        )}
        {senderUserId !== null && receiverUserId !== null && (
          <LiveChatComponent
            senderUserName={senderUserInput}
            senderUserId={senderUserId}
            receiverUserName={receiverUserInput}
            receiverUserId={receiverUserId}
          />
        )}
      </div>
    </div>
  );
};