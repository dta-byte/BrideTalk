import "./messageboxcomponent.css";

export const MessageBoxComponent = (props) => {
  const { result, senderUserId } = props;
  /* sæt props så det matcher i livechatcomponent */

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
        <p className="message_bubble">{result.get("text")}</p>
      </div>
    </div>
  )

  // return (
  //   <div>
  //     <div className="message-box-container">
  //       <div className="message-box">
  //         {backgroundColor}
  //         <div className="message-text">{text}</div>
  //       </div>

  //     </div>
  //   </div>
  // );
};



{/* <div
key={result.id}
// Dynamic class names
className={
  result.get('senderObject').id === senderUserId
    ? "message_sent"
    : "message_received"
}
>
<p className="message_bubble">{result.get("text")}</p>
{/* <p className="message_time">
  {formatDateToTime(result.get("createdAt"))}
</p>
<p className="message_name">
  {result.get("senderObject").get("username")}
</p>

*/}