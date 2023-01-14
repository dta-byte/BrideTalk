import "./messageboxcomponent.css";
import Parse from "parse";

/* Component returns all messages */
export const GroupMessageBoxComponent = (props) => {
  const { result } = props;
  const senderusername = props.senderusername;
  return (
    <div className="message-box">
      <div
        key={result.id}
        // Dynamic class names
        className={
          result.get("senderName") === senderusername
            ? "message_sent"
            : "message_received"
        }
      >
        <div className="senderName-group">{result.get("senderName")}</div>
        <p>{result.get("Message")}</p>
      </div>
    </div>
  );
};
