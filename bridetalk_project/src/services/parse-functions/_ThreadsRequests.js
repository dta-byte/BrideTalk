import Parse from 'parse'

// Todo: funktion der opretter ny tråd mellem current user og en reciever. 
export const addThread = async (currentUser, receiver, chatName) => { 
  try {
    //Current user 
    const currentUser = Parse.User.current();

    //create query to class user 
    const receiverObjectQuery = new Parse.Query("User")
    receiverObjectQuery.equalTo("username", receiver)
    const receiverUserObject = await receiverObjectQuery.first();

    const newThread = new Parse.Object('Threads');
    newThread.set('thread', chatName )
    newThread.set('sender', currentUser)
    newThread.set('receiver', receiverUserObject)

    return await newThread.save();
  } catch (error) {
      throw error;
  }
 };



export const getUserThreads = async () => { 
  const threadObjects = new Parse.Query('Thread');
  const currentUser = Parse.User.current();
  threadObjects.equalTo("sender", currentUser);

  try {
    const threadResults = await threadObjects.find();
      for( const object of threadResults ) {
        const thread = object.get('objectId');
        const sender = object.get('sender');
        const receiver = object.get('receiver');

        console.log(thread);
        console.log(sender);
        console.log(receiver);
      }
      console.log(threadResults);
    return threadResults;
  } catch (error) {
    throw error;
  }
 }

export const getUsersThreadsForCurrentUser = async (currentUser) => {
    
    try {
      // Current User which is the sender and threads to be given 
      const currentUser = Parse.User.current();
      console.log("This is the current user: ", currentUser)

      // Creates the query receiving Threads
      // const messagesParseQuery = new Parse.Query('Message');
      const threadsParseQuery = new Parse.Query('Threads')
      
      
      //The threads where the senderObject == to the current users id
      threadsParseQuery.equalTo("senderObject", currentUser);
      // messagesParseQuery.equalTo("senderObject", currentUser);
   
      const threadsResults = await threadsParseQuery.find();
        for(const thread of threadsResults){
          const receiver = thread.get('receiver')
          const senderObject = thread.get('senderObject')
          const objectId = thread.get('objectId')

          console.log(objectId)
          console.log(receiver);
          console.log(senderObject);
        }
     
     
      console.log("This is the threads from ", currentUser.id, " :", threadsResults)
      return true;

    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`No user is logged in`);
      return false;
    };
  };


  // const relatedThreadsToCurrentUser = threadsArr.map((threads, index) => {
  //   return <ThreadBox text="RECIEVERS" handleClick={() => changeMessageOverview} />
  // })

// Reading User objects

// export const readUsers = async function () {
//     // Reading parse objects is done by using Parse.Query
//     const parseQuery = new Parse.Query('User');
//     try {
//         let users = await parseQuery.find();
//         // Be aware that empty or invalid queries return as an empty array
//         return true;
//     } catch (error) {
//         // Error can be caused by lack of Internet connection
//         alert(`Error! ${error.message}`);
//         return false;
//     };
// };

// //   Update User password
// export const updateUserPassword = async function (userID, password) {
//     // Create a User parse object instance and set userID
//     let User = new Parse.Object('User');
//     User.set('userID', userID);
//     // Set new done value and save Parse Object changes
//     User.set('password', password);
//     try {
//         await User.save();
//         // Success
//         alert('Success! USer updated!');
//         return true;

//     } catch (error) {
//         // Error can be caused by lack of Internet connection
//         alert(`Error! ${error.message}`);
//         return false;
//     };
// };

// //   Deleting a User
// export const deleteUser = async function (userID) {
//     // Create a new User parse object instance and set user id
//     const User = new Parse.Object('User');
//     User.set('userID', userID);
//     // .destroy should be called to delete a parse object
//     try {
//         await User.destroy();
//         alert("Success! User: " + User + " is deleted!");
//         return true;

//     } catch (error) {
//         // Error can be caused by lack of Internet connection
//         alert(`Error ${error.message}`);
//         return false;
//     };
// };