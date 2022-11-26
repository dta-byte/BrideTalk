import "./threadview.css";
import { IoIosCreate } from "react-icons/io";
import { ThreadBox } from "../../../atoms";

export const ThreadView = () => {

  const changeMessageOverview = () => {
    alert('Clicked!')
    // get the username(s) change the headline and find all the messages, when the user clicks the thread. 
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
    </div>
  );
};
