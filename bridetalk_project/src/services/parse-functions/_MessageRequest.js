
import Parse from 'parse'

export const addMessage = async (messageInput, reciever, senderUserObject) => {
    try {
      const messageText = messageInput;
      console.log(messageText + " this is the messagetext")
      
      senderUserObject = Parse.User.current();

      console.log("This is senderuserobject username: ", senderUserObject.getUsername(), " and this is the senderuserobject id: ", senderUserObject.id)

      // Create query for reciever
      //   const recieverObjectId = getReciever(reciever);
      //   console.log(recieverObjectId);
      const receiverUserObjectQuery = new Parse.Query("User");

      receiverUserObjectQuery.equalTo("objectId", reciever);
      // query runs
      let receiverUserObject = await receiverUserObjectQuery.first();
      console.log("this is receiverUserObject ", receiverUserObject);

      // Create new Message object and save it
      let Message = new Parse.Object("Message");
      Message.set("text", messageText);
      Message.set("senderObject", senderUserObject);
      Message.set("receiver", receiverUserObject);
      Message.save();

      // Clear input
    //   setMessageInput();

    } catch (error) {

      alert(error);
    }
  };

