import "./messageboxcomponent.css";

export const MessageBoxComponent = (props) => {
  const { text } = props;

  return (
    <div>
      <div className="message-box-container">
        {/* <div className="currentUser == senderObject? reveiver-message-box : sender-message-box"> */}
        <div className="sender-message-box">
          <div className="message-text">{text}</div>
        </div>
      </div>
    </div>
  );
};
