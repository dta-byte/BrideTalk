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
    newThread.set('thread', chatname )
    newThread.set('sender', currentUser)
    newThread.set('receiver', receiverUserObject)
 
    return await newThread.save();
  } catch (error) {
      throw error;
  }
 };


// Funtion gets the threads for current user. 
export const getUserThreads = async () => { 
  const threadObjects = new Parse.Query('Threads');
  const currentUser = Parse.User.current();

  threadObjects.equalTo("sender", currentUser);

  let threadArr = [];

  try {
    const threadResults = await threadObjects.findAll();
    threadResults.map((object => {
      const sender = object.get('sender');
      const receiver = object.get('receiver');
   

      threadArr.push({
        thread: object, 
        sender: sender, 
        receiver: receiver})
    })
    )
    return threadArr;
  } catch (error) {
    console.log(error);
    throw error;
  }
 }

