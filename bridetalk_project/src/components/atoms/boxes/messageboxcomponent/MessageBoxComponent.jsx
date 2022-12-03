import "./messageboxcomponent.css";

export const MessageBoxComponent = (props) => {
  const { text, backgroundColor } = props;

  return (
    <div>
      <div Classname="message-box-container">
        <div className="message-box">
          {backgroundColor}
          <div className="message-text">{text}</div>
        </div>
       
      </div>
    </div>
  );
};
