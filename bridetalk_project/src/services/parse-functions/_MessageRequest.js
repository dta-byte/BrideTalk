
import Parse from 'parse'
import { getUser } from './_UserRequest';

export const addMessage = async (messageInput, recieverId, senderUserObject) => {
  try {
    const messageText = messageInput;

    // Create query for reciever
    const receiverUserObject = await getUser(recieverId);

    senderUserObject = Parse.User.current();
   
    // Create new Message object and save it
    const Message = new Parse.Object("Message");
    Message.set("text", messageText);
    Message.set("senderObject", senderUserObject);
    Message.set("receiver", receiverUserObject);
    Message.save();
  } catch (error) {
    throw error;
  }
};

export const addMessageToAllUsers = async (messageInput, senderUserObject) => {
  try {
    const messageText = messageInput;

    senderUserObject = Parse.User.current();
   
    // Create new Message object and save it
    const Theme = new Parse.Object("Theme");
    Theme.set("Message", messageText);
    Theme.set("senderObject", senderUserObject);
    Theme.save();
  } catch (error) {
    throw error;
  }
};



