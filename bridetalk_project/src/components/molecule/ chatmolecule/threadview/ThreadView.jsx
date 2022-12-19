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
import { useAuth } from "../../../pages/auth/core/Auth";

export const ThreadView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [receiver, setReceiver] = useState();
  const [chatname, setChatName] = useState();
  const { currentUser } = useAuth();
  const [threadsArr, setThreadsArr] = useState([])


  const doAddThreads = () => {
    try {
      addThread(currentUser, receiver, chatname);
      setIsVisible((prevState) => !prevState);
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
  const changeLiveChatView = () => {
    //1: username overskrift skal ændres 
    //2: beskeder skal ændres 
  };

  const doFindThreads = async () => {
    try {
      const threadsArr = await getUserThreads();
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
      <div className="threads-list">
        {/* Shows all the related threads to the current user and changes the live chat overview, if a threads gets clciked. */}


        {threadsArr.map(({ receiver, thread }) => {

          console.log(receiver)

          return <ThreadBox
            key={thread.id}
            handleClick={changeLiveChatView}
            recieverId={receiver.id}
          />
        })}

      </div>
    </div>
  );
};
