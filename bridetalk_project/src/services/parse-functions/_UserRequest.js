import Parse from 'parse'

export const addUser = async (formData) => {
  try {
    // create a new Parse User instance and since the signUp method returns a Promise, we need to call it using await
    let newUser = await Parse.User.signUp(formData.username, formData.password);

    newUser.set("username", formData.username);
    newUser.set("email", formData.email);
    newUser.set("password", formData.password);
    newUser.set("location", formData.location);

    return await newUser.save();
  } catch (error) {
    throw error;
  }
};
//Returns a user from DB by objectId
export const getUser = async (objectId) => {
  try {
    const userQuery = new Parse.Query("User");
    userQuery.equalTo("objectId", objectId);
    const user = await userQuery.first();
    return user;
  } catch (error) {
    throw error;
  }
}

//Logs user in
export const signIn = async (userData) => {
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

//Logs user out
export const signOut = async () => {
  try {
    await Parse.User.logOut();
    return true;
  } catch (error) {

    throw error;
  }
};

// export const updatePassword = async (currentUserId, newPassword) => {
//   try {
//     // Create a new User parse object instance and set User id
//     const userQuery = new Parse.Query("User");
//     const userId = await userQuery.get(currentUserId);
    
//     // Set new done value and save Parse Object changes
//     userId.set('password', newPassword);
//     await userId.save();
//     // // Success
//     alert('Success! Password updated!');
//     return true;
//   } catch (error) {
//    throw error;
//   };
// };
