import "./threadview.css";
import { IoIosCreate } from "react-icons/io";
import { addThread, getUserThreads } from "../../../../services/parse-functions";
import { useState } from "react";
import { Button, InputField, ThreadBox } from "../../../atoms";
import Parse from 'parse'


export const ThreadView = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [receiver, setReceiver] = useState();
  const [chatname, setChatName] = useState();
  const [threadsArr, setThreadsArr] = useState([])
  // const threadArr = [[]];
  const user = Parse.User.current();

  const doAddThreads = () => {
    try {
      addThread(user, receiver, chatname);
      alert(`New threads is created`)
    } catch (error) {
      console.log("Error creading new thread.");
      alert(`Thre reciever does not exist :()`)
    }
  };

  const handleClick = () => {
    setIsVisible(!isVisible)
  }
//Function to redirect the chatview into the chosen thread box
  const handleClickToThreadBox = () => {
    console.log("Thread box is clicked!");
  }

  const doFindThreads = () => {
    try {
      const threadsArr = getUserThreads();
      console.log(threadsArr)
      // const threadArray = userThreads.map((item, index) => {
      //   console.log(item)

      //   return <ThreadBox
      //     text={item}
      //     handleClick={handleClickToThreadBox} />
      // })
      console.log("This is the threads",threadsArr)
      return threadsArr;
    } catch (error) {
      throw error;
    }
  }
   

  return (
    <div>
      <div className="flexbox-treadview-top">
        <div className="thread-headline">Chat</div>
        <div className="flex-newchat-icon">
          <button
            onClick={handleClick}
          >
            <IoIosCreate className="io-icon" size={45} />
          </button>
          {/* Dropdown to new thread  STARTS*/}
          <div style={{ visibility: isVisible ? "visible" : "hidden" }}>
            <div className="newThread-box">
              <InputField
                text="Chat name"
                value={chatname}
                onChangeOut={(event) => {
                  setChatName(event.target.value)
                }}
              />
              <InputField
                text="To"
                value={receiver}
                onChangeOut={(event) => {
                  setReceiver(event.target.value)
                }}
              />
              <Button
                text={"Add new thread"}
                handleClick={() => doAddThreads()}>
              </Button>
            </div>
            {/* Dropdown to new thread  ENDS*/}

          </div>
        </div>
      </div>
      <div className="line-under-text" />
      <div classname="threads-list">
        {/* Shows all the related threads to the current user and changes the live chat overview, if a threads gets clciked. */}
        {threadsArr.map(item => 
          <ThreadBox
          text={item}
          handleClick={handleClickToThreadBox}
          />
          )}

      </div>
    </div>
  );
};
