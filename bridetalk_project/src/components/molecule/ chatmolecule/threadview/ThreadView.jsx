import "./threadview.css";
import { IoIosCreate } from "react-icons/io";
import Parse from "parse"
import { useState, useEffect } from "react";
import { ThreadBox } from "../../../atoms"

export const ThreadView = () => {

  const [threadsArr, setThreadsArr] = useState([]);

  const getUsersThreads = async () => {
    try {
      // Current User which is the sender and threads to be given 
      let currentUserObject = Parse.User.current();
      console.log("This is the current user: ", currentUserObject)

      // Creates the query receiving messages
      const messagesParseQuery = new Parse.Query('Message');

      /*
      Todo: Wants the threads where the senderObject inside the class Message is == to the current users id
      */
      // messagesParseQuery.equalTo("senderObject", currentUserObject);
   
      const messagesResults = await messagesParseQuery.find();
        for(const object of messagesResults){
          const text = object.get('text')
          const receiver = object.get('receiver')
          const senderObject = object.get('senderObject')
          const objectId = object.get('objectId')

          console.log(objectId)
          console.log(text);
          console.log(receiver);
          console.log(senderObject);
        }
     
     
      console.log("this is the threads from ", currentUserObject.id, " :", messagesResults)



      /**TODO: GET THE RECIEVERS FOR THE MESSAGES */

      // Create new threads and saves them
      let Threads = new Parse.Object("Threads");
      Threads.set("thread", messagesResults)
      Threads.set("userObject", currentUserObject.id)

      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    };
  };

  useEffect(() => {
    getUsersThreads().then((props) =>
      props ? setThreadsArr() : null
    );
  }, [])

  const relatedThreadsToCurrentUser = threadsArr.map((threads, index) => {
    return <ThreadBox text="RECIEVERS" handleClick={() => changeMessageOverview} />
  })


  const changeMessageOverview = async () => {
    // let hej = currentUser;
  }

  return (
    <div>
      <div className="flexbox-treadview-top">
        <div className="thread-headline">Chat</div>
        <div className="flex-newchat-icon">
          <IoIosCreate className="io-icon" size={45} />
        </div>
      </div>
      <div className="line-under-text" />
      <div classname="threads-list">
        {/* Shows all the related threads to the current user and changes the live chat overview, if a threads gets clciked. */}
        {relatedThreadsToCurrentUser}
        {/* <ThreadBox
            text="Emma, Jose"
            handleClick={() => changeMessageOverview()} />
          <ThreadBox 
            text="Emma, Jose" 
            handleClick={() => changeMessageOverview()} />
          <ThreadBox 
            text="Emma, Jose" 
            handleClick={() => changeMessageOverview()} /> */}
      </div>
    </div>
  );
};
