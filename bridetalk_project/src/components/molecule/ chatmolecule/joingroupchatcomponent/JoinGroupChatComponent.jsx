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
  addGroup("xxx");

  console.log(groupsArr);

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

      <div className>
        <div className="grid-container-groupthemebox">{groupsArr}</div>
      </div>
    </div>
  );
};
