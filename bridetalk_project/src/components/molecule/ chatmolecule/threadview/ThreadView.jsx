import "./threadview.css";
import { IoIosCreate } from "react-icons/io";

export const ThreadView = () => {
  return (
    <div>
      <div className="flexbox-treadview-top">
        <div className="thread-headline">Chat</div>
        <div className="flex-newchat-icon">
          <IoIosCreate className="io-icon" size={45} />
        </div>
      </div>
      <div
        style={{
          height: "1.5px",
          backgroundColor: "black",
          justifyContent: "center",
        }}
      />
    </div>
  );
};
