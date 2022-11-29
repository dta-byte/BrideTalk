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
          <GroupThemeBox text={"Hair"} ></GroupThemeBox>
          <GroupThemeBox text={"Music"}></GroupThemeBox>
          <GroupThemeBox text={"Dresses"}></GroupThemeBox>
         
        </div>
        <div className="container2-groupthemebox">
          <GroupThemeBox text={"Catering"} ></GroupThemeBox>
          <GroupThemeBox text={"Flowers"}></GroupThemeBox>
          <GroupThemeBox text={"Rings"}></GroupThemeBox>
        </div>
      </div>
    </div>
  );
};

/*
<div classname="grid-container-groupthemebox">
        <GroupThemeBox text={"Hair"}></GroupThemeBox>
        <GroupThemeBox text={"Music"}></GroupThemeBox>
        <GroupThemeBox text={"Dresses"}></GroupThemeBox>
        <GroupThemeBox text={"Catering"}></GroupThemeBox>
        <GroupThemeBox text={"Flowers"}></GroupThemeBox>
        <GroupThemeBox text={"Rings"}></GroupThemeBox>
      </div>
      */
