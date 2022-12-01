import Parse from 'parse'

export const addUser = async (formData) => {
    try {
        // create a new Parse User instance and since the signUp method returns a Promise, we need to call it using await
        const newUser = await Parse.User.signUp(formData.username, formData.password);

        newUser.set("username", formData.username);
        newUser.set("email", formData.email);
        newUser.set("password", formData.password);
        newUser.set("location", formData.location);

        return await newUser.save();
    } catch (error) {
        throw error;
    }
};

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


// const doUserLogOut = async function () {
  //   try {
  //     await Parse.User.logOut();
  //     // To verify that current user is now empty, currentAsync can be used
  //     const currentUser = await Parse.User.current();
  //     if (currentUser === null) {
  //       alert('Success! No user is logged in anymore!');
  //     }
  //     // Update state variable holding current user
  //     getCurrentUser();
  //     return true;
  //   } catch (error) {
  //     alert(`Error! ${error.message}`);
  //     return false;
  //   }
  // };

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
