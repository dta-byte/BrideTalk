import React, { useState, useEffect } from "react";
import { Button, InputField } from "../../atoms";
import { LiveChatComponent } from "../../molecule";
import Parse from "parse";
import { addMessage } from "../../../services/parse-functions";
import { useAuth } from "../auth/core/Auth";
import { getUser } from "../../../services/parse-functions";

export const ChatSetup = () => {
  // const { currentUser } = useAuth();
  // // State variables holding input values and results
  // const [senderUserInput, setSenderUserInput] = useState("");
  // const [senderUserId, setSenderUserId] = useState(null);
  // // const [receiverUserInput, setReceiverUserInput] = useState("");
  // // const [receiverUserId, setReceiverUserId] = useState(null);
  // const [receiver, setReceivername] = useState(null);
  // useEffect(() => {
  //   init();
  // }, [])

  // const init = async () => {
  //   const receiver = await getUser(props.receiverUserId);
  //   console.log(receiver);
  //   setReceivername(receiver.get('username'))
  // };

  // const getLiveChat = async () => {

  // }
   // State variables holding input values and results
   const [senderUserInput, setSenderUserInput] = useState("");
   const [senderUserId, setSenderUserId] = useState(null);
   const [receiverUserInput, setReceiverUserInput] = useState("");
   const [receiverUserId, setReceiverUserId] = useState(null);
 
   // Create or retrieve User objects and start LiveChat component
   const startLiveChat = async () => {
     const senderUserName = senderUserInput;
     const receiverUserName = receiverUserInput;
    console.log(receiverUserName);
     // Check if user informed both Users
     if (senderUserName === null || receiverUserName === null) {
       alert("Please inform both sender and receiver Users!");
       return false;
     }
 
     // Check if sender User already exists, if not create new parse object
     let senderUserObject = null;
     try {
       const senderParseQuery = new Parse.Query("User");
       senderParseQuery.equalTo("name", senderUserName);
       const senderParseQueryResult = await senderParseQuery.first();
       if (
         senderParseQueryResult !== undefined &&
         senderParseQueryResult !== null
       ) {
         senderUserObject = senderParseQueryResult;
       } else {
         senderUserObject = new Parse.Object("User");
         senderUserObject.set("name", senderUserName);
         senderUserObject = await senderUserObject.save();
       }
     } catch (error) {
       alert(error);
       return false;
     }
 
     // Check if receiver User already exists, if not create new parse object
     let receiverUserObject = null;
     try {
       const receiverParseQuery = new Parse.Query("User");
       receiverParseQuery.equalTo("name", receiverUserName);
       const receiverParseQueryResult = await receiverParseQuery.first();
       if (
         receiverParseQueryResult !== undefined &&
         receiverParseQueryResult !== null
       ) {
         receiverUserObject = receiverParseQueryResult;
       } else {
         receiverUserObject = new Parse.Object("User");
         receiverUserObject.set("name", receiverUserName);
         receiverUserObject = await receiverUserObject.save();
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
    <div className="header">
      <img
        className="header_logo"
        alt="Back4App Logo"
        src={
          "https://blog.back4app.com/wp-content/uploads/2019/05/back4app-white-logo-500px.png"
        }
      />
      <p className="header_text_bold">{"React on Back4App"}</p>
      <p className="header_text">{"Live query chat app"}</p>
    </div>
    <div className="container">
      {senderUserId === null && receiverUserId === null && (
        <div>
          <InputField
            className="form_input"
            value={senderUserInput}
            onChangeOut={(event) => setSenderUserInput(event.target.value)}
            placeholder={"Sender (Your) User"}
            size="large"
          />
          <InputField
            className="form_input"
            value={receiverUserInput}
            onChangeOut={(event) => setReceiverUserInput(event.target.value)}
            placeholder={"Receiver (Their) User"}
            size="large"
          />
          <Button
            text={"Start live chat"}
            color={"#208AEC"}
            handleClick={() => startLiveChat()}
          >
          </Button>
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
//     <div>
//       <div className="container-bacground">
//         {senderUserId === null && receiverUserId === null && (
//           <div>
//             <InputField
//               type="text"
//               value={senderUserInput}
//               onChangeOut={(event) => setSenderUserInput(event.target.value)}
//               text={"Sender"}
//             />
//             <InputField
//               type="text"
//               value={receiverUserInput}
//               onChangeOut={(event) => setReceiverUserInput(event.target.value)}
//               text={"Receiver"}
//             />
//             <Button
//               text={"Start chatting!"}
//               color={"var(--global-primary-2)"}
//               handleClick={startLiveChat()}
//             />
//           </div>
//         )}
//         {senderUserId !== null && receiver.id !== null && (
//           <LiveChatComponent
//             senderUserName={currentUser}
//             senderUserId={currentUser}
//             receiverUserName={receiver.get('username')}
//             receiverUserId={receiver.id}
//           />
//         )}
//       </div>
//     </div>
//   );
// };