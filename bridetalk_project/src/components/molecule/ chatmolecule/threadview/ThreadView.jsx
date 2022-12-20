import { IoIosCreate } from "react-icons/io";
import {
  addThread,
  getUserThreads,
} from "../../../../services/parse-functions";
import { useState } from "react";
import { Button, InputField, ThreadBox } from "../../../atoms";
import { useEffect } from "react";
import "./threadview.css";
import { useAuth } from "../../../pages/auth/core/Auth";
import { useChatContext } from "../../../pages/Chat/mainchatpagecomponent/MainChatPageProvider";

export const ThreadView = () => {


  const { threadList, setCurrentReciever } = useChatContext();

  const [isVisible, setIsVisible] = useState(false);
  const [receiver, setReceiver] = useState();
  const [chatname, setChatName] = useState();
  const { currentUser } = useAuth();
  const [buttonPopup, setButtonPopup] = useState(false);

  const doAddThreads = () => {
    try {
      addThread(currentUser, receiver, chatname);
      setIsVisible((prevState) => !prevState);
      alert(`New thread is created`);
      setButtonPopup(true);
      

    } catch (error) {
      console.log("Error creading new thread.");
      alert(`The reciever does not exist :()`);
    }
  };

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  //Function to redirect the chatview into the chosen thread box
  const changeLiveChatView = (recieverId, recieverUsername) => {
    // Ændrer current receiver til hvad useren har trykket på
    setCurrentReciever({recieverId, recieverUsername});
  };

  return (
    <div>
      <div className="flexbox-treadview-top">
        <div className="thread-headline">Chats </div>
        <div className="flex-newchat-icon">

          <IoIosCreate 
          onClick={handleClick} 
          className="io-icon" 
          size={37} 
          color={"var(--global-secondary-1"} />
          {/* Dropdown to new thread  STARTS*/}
          <div style={{ visibility: isVisible ? "visible" : "hidden" }}>
            <div className="newThread-box">
              <div className="inputfield-newthread-dropdown">
                <InputField
                  text="To: "
                  value={receiver}
                  onChangeOut={(event) => {
                    setReceiver(event.target.value)
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
                  handleClick={() => handleClick()} />
              </div>

            </div>
            {/* Dropdown to new thread  ENDS*/}
          </div>
        </div>
      </div>
      <div className="line-under-text" />
      <div className="threads-list">
        {/* Shows all the related threads to the current user and changes the live chat overview, if a threads gets clciked. */}

        {threadList.map(({ receiver, thread }) => {
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
