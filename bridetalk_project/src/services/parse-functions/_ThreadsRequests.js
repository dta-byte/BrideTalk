import Parse from 'parse'

export const addThread = async (currentUser, receiver, chatname) => {
  try {
    //Current user 
    const currentUser = Parse.User.current();

    //create query to class user 
    const receiverObjectQuery = new Parse.Query("User")
    receiverObjectQuery.equalTo("username", receiver)
    const receiverUserObject = await receiverObjectQuery.first();

    const newThread = new Parse.Object('Threads');
    newThread.set('thread', chatname)
    newThread.set('sender', currentUser)
    newThread.set('receiver', receiverUserObject)

    return await newThread.save();
  } catch (error) {
    throw error;
  }
};

// Funtion gets the threads for current user. 
export const getUserThreadsQuery = async () => {

  try {
    const result = {
      sender: [],
      receiver: []
    }
    
    //Get all threads where the user is the sender
    result.sender = await getThreadObject("sender");

    // Get all threads where the user is the receiver
    result.receiver = await getThreadObject("receiver");

    return result.sender.concat(result.receiver)

  } catch (error) {
    throw error;
  }
}


const getThreadObject = async (queryParam) => {

  try {

    const threadObjects = new Parse.Query('Threads');
    const currentUser = Parse.User.current();
    const threadArr = [];

    threadObjects.equalTo(queryParam, currentUser)
    const threadResults = await threadObjects.findAll();

    // For later use: Should proabably take a chatname
    threadResults.map((object => {
      const sender = object.get('sender');
      const receiver = object.get('receiver');

      threadArr.push({
        thread: object,
        sender: sender,
        receiver: receiver
      })
    })
    )
    return threadArr;
  } catch (error) {
    throw error
  }
}

