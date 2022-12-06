import "./threadview.css";
import { IoIosCreate } from "react-icons/io";
import { useAuth } from "../../../pages/auth/core/Auth";
import { getUsersThreadsForCurrentUser } from "../../../../services/parse-functions/_UserRequest";
// import { ThreadBox } from "../../../atoms"

export const ThreadView = () => {

  // const [threadsArr, setThreadsArr] = useState([]);

  // getUsersThreadsForCurrentUser(currentUser)

  // const changeMessageOverview = async () => {
  //   // let hej = currentUser;
  // }

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
