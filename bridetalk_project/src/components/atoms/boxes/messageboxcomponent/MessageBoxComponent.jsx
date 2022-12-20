import "./messageboxcomponent.css";
/* Component returns all messages */
export const MessageBoxComponent = (props) => {
  const { result, senderUserId } = props;

  return (
    <div className="message-box">
      <div
        key={result.id}
        // Dynamic class names
        className={
          result.get('senderObject').id === senderUserId
            ? "message_sent"
            : "message_received"
        }
      >
        <p>{result.get("text")}</p>
      </div>
    </div>
  )
};

