import "./livechatcomponent.css";
import { InputField, MessageBoxComponent } from "../../../atoms";
export const LiveChatComponent = () => {
  return (
    <div className="flexbox-container-livechat">
      <div className="flexchild1-livechat">
        <div className="livechat-headline">Username</div>
        <div
          style={{
            height: "1px",
            width: "90%",
            marginLeft: "5%",
            backgroundColor: "black",
            justifyContent: "center",
          }}
        />
        <MessageBoxComponent text={"Hey"}></MessageBoxComponent>
        <MessageBoxComponent
          text={"Your message has been sent"}
          
          
        ></MessageBoxComponent>
        <MessageBoxComponent
          text={"Your loooooooooooooooooong message has been sent"}
        ></MessageBoxComponent>
      </div>
      <div className="flexchild2-livechat">
        <InputField value="Aa" type="email" />
      </div>
    </div>
  );
};
