import { useState, useRef, useEffect } from "react";
import { IoIosCreate } from "react-icons/io";
import { BsCheckCircle } from "react-icons/bs";
import { addThread } from "../../../../services/parse-functions";
import { Button, InputField, ThreadBox, PopUp } from "../../../atoms";
import { useAuth } from "../../../pages/auth/core/Auth";
import { useChatContext } from "../../../pages/Chat/mainchatpagecomponent/MainChatPageProvider";
import "./threadview.css";

export const ThreadView = () => {
  const { threadList, setCurrentReciever } = useChatContext();

  const [isVisible, setIsVisible] = useState(false);
  const [receiver, setReceiver] = useState();
  const [chatname, setChatName] = useState();
  const { currentUser } = useAuth();
  const [buttonPopupCreated, setButtonPopupCreated] = useState(false);
  const [buttonPopupError, setButtonPopupError] = useState(false);
  const [activeReceiver, setActiveReceiver] = useState(false);

  let newThreadRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!newThreadRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    });
  });

  const doAddThreads = () => {
    try {
      addThread(currentUser, receiver, chatname);
      setIsVisible((prevState) => !prevState);
      setButtonPopupCreated(true);
    } catch (error) {
      console.log("Error creading new thread.");
      alert(`The reciever does not exist :()`);
      setButtonPopupError(true);
    }
  };

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  //Function to redirect the chatview into the chosen thread box
  const changeLiveChatView = (recieverId, recieverUsername) => {
    // Ændrer current receiver til hvad useren har trykket på
    setCurrentReciever({ recieverId, recieverUsername });
    setActiveReceiver(true);
    console.log(activeReceiver);
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
            color={"var(--global-secondary-1"}
          />
          {/* Dropdown to new thread  STARTS*/}
          <div style={{ visibility: isVisible ? "visible" : "hidden" }}>
            <div ref={newThreadRef} className="newThread-box">
              <div className="inputfield-newthread-dropdown">
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
                  color={"var(--global-grey-4"}
                  text={"Close window"}
                  handleClick={() => handleClick()}
                />
                <Button
                  text={"Add thread"}
                  handleClick={() => doAddThreads()}
                />
              </div>
            </div>
            {/* Dropdown to new thread  ENDS*/}
          </div>
        </div>
      </div>
      <PopUp trigger={buttonPopupCreated} setTrigger={setButtonPopupCreated}>
        <div className="thread-popUp-created">
          <BsCheckCircle className="Check-Cirkle-icon-tread" size={65} />
          <p> New thread is created </p>
        </div>
      </PopUp>

      <PopUp trigger={buttonPopupError} setTrigger={setButtonPopupError}>
        <div className="thread-popUp-error">
          <p> The reciever does not exist </p>
        </div>
      </PopUp>

      <div className="line-under-headline" />
      <div className="threads-list">
        {/* Shows all the related threads to the current user and changes the live chat overview, if a threads gets clciked. */}
        {threadList.map(({ receiver, thread }) => {
          return (
            <ThreadBox
              key={thread.id}
              handleClick={changeLiveChatView}
              recieverId={receiver.id}
            />
          );
        })}
      </div>
    </div>
  );
};
