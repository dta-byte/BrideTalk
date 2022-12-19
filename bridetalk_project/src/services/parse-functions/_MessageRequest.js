
import Parse from 'parse'

export const addMessage = async (messageInput, reciever, senderUserObject, chatname) => {
  try {
    const messageText = messageInput;

    senderUserObject = Parse.User.current();

    // Create query for reciever
    const receiverUserObjectQuery = new Parse.Query("User");
    receiverUserObjectQuery.equalTo("objectId", reciever);

    // query runs
    let receiverUserObject = await receiverUserObjectQuery.first();

    // Create new Message object and save it
    let Message = new Parse.Object("Message");
    Message.set("text", messageText);
    Message.set("senderObject", senderUserObject);
    Message.set("receiver", receiverUserObject);
    Message.set("thread", chatname)
    Message.save();

    // Clear input
      // setMessageInput();

  } catch (error) {

    alert(error);
  }
};

export const setLiveChatView = (username) => {
  try {

  } catch (error) {

  }
}

