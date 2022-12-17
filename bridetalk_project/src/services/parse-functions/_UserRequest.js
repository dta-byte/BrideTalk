import Parse from 'parse'


export const addUser = async (formData) => {
    try {
        // create a new Parse User instance and since the signUp method returns a Promise, we need to call it using await
        const newUser = await Parse.User.signUp(formData.username, formData.password);

        newUser.set("username", formData.username);
        newUser.set("email", formData.email);
        newUser.set("password", formData.password);
        newUser.set("location", formData.location);
        newUser = Parse.User.logIn(); 
        
        return await newUser.save();
        
    } catch (error) {
        throw error;
    }
};
 


// export const getReciever = async (reciever) => {
//   try {
//     const receiverUserObjectQuery = new Parse.Query("User");

//     receiverUserObjectQuery.equalTo("objectId", reciever);
//     // query runs
//     const receiverUserObject = await receiverUserObjectQuery.first();
//     console.log(receiverUserObject , "get reciever");
//     console.log("this is receiverUserObject ", receiverUserObject)
      
//       return reciever;
//   } catch (error) {
//       throw error;
//   }
// };

export const login = async  (userData) => {
    try {
    const loggedInUser = await Parse.User.logIn(userData.username, userData.password);

    const currentUser = Parse.User.current();

    if (loggedInUser === currentUser) {
        return true
    } else {
        throw new Error('Current user and logged in user not the same')
    }

    } catch (error) {
      throw error;
    }
  };


  export const logout = async () => {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = Parse.User.current();
    
      // Update state variable holding current user
      // getCurrentUser();
      return true;
    } catch (error) {
      
      return false;
    }
  };

  