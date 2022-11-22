import { GroupThemeBox } from "../../../atoms";
import "./joingroupchatcomponent.css";

export const JoinGroupChatComponent = () => {
  return (
    <div>
      <div className="joingroupchat-headline">Join group chats</div>
      <div
        style={{
          height: "1.5px",
          backgroundColor: "black",
          justifyContent: "center",
        }}
      ></div>
      <div>
        <div className="container1-groupthemebox">
          <GroupThemeBox></GroupThemeBox>
          <GroupThemeBox></GroupThemeBox>
          <GroupThemeBox></GroupThemeBox>
        </div>
        <div className="container2-groupthemebox">
          <GroupThemeBox></GroupThemeBox>
          <GroupThemeBox></GroupThemeBox>
          <GroupThemeBox></GroupThemeBox>
        </div>
      </div>
    </div>
  );
};
