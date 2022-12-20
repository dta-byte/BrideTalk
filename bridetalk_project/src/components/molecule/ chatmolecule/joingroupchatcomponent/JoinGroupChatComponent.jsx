import { Button, GroupThemeBox } from "../../../atoms";
import "./joingroupchatcomponent.css";

export const JoinGroupChatComponent = () => {
  let groupsArr = [[]];

  function addGroup(name) {
    groupsArr.push(<GroupThemeBox text={name}></GroupThemeBox>);
  }

  addGroup("Hair");
  addGroup("Music");
  addGroup("Dresses");
  addGroup("Catering");
  addGroup("Flowers");
  addGroup("Rings");
  addGroup("Venues");

  return (
    <div>
      <div className="joingroupchat-headline">Join group chats</div>
      <div className="joingroupchat-divider-line" />

      <div className>
        <div className="grid-container-groupthemebox">{groupsArr}</div>
      </div>
    </div>
  );
};
