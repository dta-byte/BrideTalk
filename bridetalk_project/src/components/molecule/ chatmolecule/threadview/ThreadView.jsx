import { IoIosCreate } from "react-icons/io";
import {
  addThread,
  getUserThreads,
} from "../../../../services/parse-functions";
import { useState } from "react";
import { Button, InputField, ThreadBox } from "../../../atoms";
import Parse from "parse";
import { useEffect } from "react";
import { PopUp } from "../../popUp/PopUp";
import "./threadview.css";

export const ThreadView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [receiver, setReceiver] = useState();
  const [chatname, setChatName] = useState();
  const [threadsArr, setThreadsArr] = useState([]);

  const user = Parse.User.current();

  const doAddThreads = () => {
    try {
      addThread(user, receiver, chatname);

      alert(`New threads is created`);
    } catch (error) {
      console.log("Error creading new thread.");
      alert(`Thre reciever does not exist :()`);
    }
  };

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  //Function to redirect the chatview into the chosen thread box
  const handleClickToThreadBox = () => {
    console.log("Thread box is clicked!");
  };

  const doFindThreads = async () => {
    try {
      const threadsArr = await getUserThreads();
      console.log(threadsArr);
      console.log("This is the threads", threadsArr);
      setThreadsArr(threadsArr);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    doFindThreads();
  }, []);

  return (
    <div>
      <div className="flexbox-treadview-top">
        <div className="thread-headline">Chats </div>
        <div className="flex-newchat-icon">
          <IoIosCreate
            onClick={handleClick}
            className="io-icon"
            size={37}
            color={"var(--global-secondary-1"}
          />
          {/* Dropdown to new thread  STARTS*/}
          <div style={{ visibility: isVisible ? "visible" : "hidden" }}>
            <div className="newThread-box">
              <div className="inputfield-newthread-dropdown">
                <InputField
                  text="Chat name: "
                  value={chatname}
                  onChangeOut={(event) => {
                    setChatName(event.target.value);
                  }}
                />
                <InputField
                  text="To: "
                  value={receiver}
                  onChangeOut={(event) => {
                    setReceiver(event.target.value);
                  }}
                />
              </div>
              <div className="buttons-newthread-dropdown">
                <Button
                  text={"Add thread"}
                  handleClick={() => doAddThreads()}
                />

                <Button
                  color={"var(--global-grey-3"}
                  text={"Close window"}
                  handleClick={() => handleClick()}
                />
              </div>
            </div>
            {/* Dropdown to new thread  ENDS*/}
          </div>
        </div>
      </div>
      <div className="line-under-text" />
      <div classname="threads-list">
        {/* Shows all the related threads to the current user and changes the live chat overview, if a threads gets clciked. */}

        {threadsArr.map(({ sender, receiver, thread }) => (
          <ThreadBox
            key={thread.id}
            text={receiver.get("username")}
            handleClick={handleClickToThreadBox}
          />
        ))}
      </div>
    </div>
  );
};
