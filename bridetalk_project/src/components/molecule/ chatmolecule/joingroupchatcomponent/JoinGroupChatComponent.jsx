import { GroupThemeBox } from "../../../atoms";
import "./joingroupchatcomponent.css";

export const JoinGroupChatComponent = () => {
  const groupsArr = [[]];

  const addGroupToArr = (name) => {
    groupsArr.push(<GroupThemeBox text={name}></GroupThemeBox>);
  }
  addGroupToArr("Hair");
  addGroupToArr("Music");
  addGroupToArr("Dresses");
  addGroupToArr("Catering");
  addGroupToArr("Flowers");
  addGroupToArr("Rings");
  addGroupToArr("Venues");

  return (
    <div>
      <div className="joingroupchat-headline">Join a group chat</div>
      <div className="joingroupchat-divider-line"/>
      <div className="grid-container-groupthemebox">{groupsArr}</div>
    </div>
  );
};
