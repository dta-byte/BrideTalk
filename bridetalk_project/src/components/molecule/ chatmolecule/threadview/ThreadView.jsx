import "./threadview.css";
import { IoIosCreate } from "react-icons/io";
<<<<<<< HEAD
import { ThreadBox } from "../../../atoms";

export const ThreadView = () => {

  const changeMessageOverview = () => {
    alert('Clicked!')
    // get the username(s) change the headline and find all the messages, when the user clicks the thread. 
  }

=======
import Parse from "parse"
import { useState } from "react";
import { ThreadBox } from "../../../atoms"
export const ThreadView = () => {

  const [currentUser, setCurrentUser] = useState(null);

  // Function that will return current user and also update current username
  const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    // Update state variable holding current user
    setCurrentUser(currentUser);
    return currentUser;
  };

  const getUsersThreads = async  () => {
    // const { user } = props; 
    try {
      // current User which is the sender and threads to be given 
        let userObject = await getCurrentUser();
       // Creates the query recieveng messages
       const messagesParseQuery = new Parse.Query('Message');
       messagesParseQuery.equalTo("sender", userObject.id);
      let messagesObjects = await messagesParseQuery.first();

      console.log("this is the threads from ", userObject.id, " :", messagesObjects)

      // Create new threads and saves them
      let Threads = new Parse.Object("Threads");
      Threads.set("thread", messagesObjects)

        return true;
    } catch (error) {
        // Error can be caused by lack of Internet connection
        alert(`Error! ${error.message}`);
        return false;
    };
};
>>>>>>> chat-functionalities
  return (
    <div>
      <div className="flexbox-treadview-top">
        <div className="thread-headline">Chat</div>
        <div className="flex-newchat-icon">
          <IoIosCreate className="io-icon" size={45} />
        </div>
      </div>
<<<<<<< HEAD
      <div className="line-under-text" />
        <div classname="threads-list">
          <ThreadBox
            text="Emma, Jose"
            handleClick={() => changeMessageOverview()} />
          <ThreadBox 
            text="Emma, Jose" 
            handleClick={() => changeMessageOverview()} />
          <ThreadBox 
            text="Emma, Jose" 
            handleClick={() => changeMessageOverview()} />
        </div>
=======
      <div
        style={{
          height: "1.5px",
          backgroundColor: "black",
          justifyContent: "center",
        }}
      />
      <ThreadBox></ThreadBox>
>>>>>>> chat-functionalities
    </div>
  );
};
