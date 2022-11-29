import Parse from 'parse'

// Reading User objects

export const readUsers = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query('User');
    try {
        let users = await parseQuery.find();
        // Be aware that empty or invalid queries return as an empty array
        return true;
    } catch (error) {
        // Error can be caused by lack of Internet connection
        alert(`Error! ${error.message}`);
        return false;
    };
};

//   Update User password
export const updateUserPassword = async function (userID, password) {
    // Create a User parse object instance and set userID
    let User = new Parse.Object('User');
    User.set('userID', userID);
    // Set new done value and save Parse Object changes
    User.set('password', password);
    try {
        await User.save();
        // Success
        alert('Success! USer updated!');
        return true;

    } catch (error) {
        // Error can be caused by lack of Internet connection
        alert(`Error! ${error.message}`);
        return false;
    };
};

//   Deleting a User
export const deleteUser = async function (userID) {
    // Create a new User parse object instance and set user id
    const User = new Parse.Object('User');
    User.set('userID', userID);
    // .destroy should be called to delete a parse object
    try {
        await User.destroy();
        alert("Success! User: " + User + " is deleted!");
        return true;

    } catch (error) {
        // Error can be caused by lack of Internet connection
        alert(`Error ${error.message}`);
        return false;
    };
};
