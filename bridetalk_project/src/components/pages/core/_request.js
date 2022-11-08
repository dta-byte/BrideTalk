import { useState } from "react";
import Parse from 'parse/dist/parse.min.js';

  const [user, setUser] = useState(null);

  async function addUser() {
    try {
      // create a new Parse Object instance
      const User = new Parse.Object('User');

      // define the attributes you want for your Object
      User.set('name', 'John');
      User.set('first-name', 'john@back4app.com');
      User.set('last-name', 'john@back4app.com');
      User.set('e-mail', 'john@back4app.com');
      User.set('password', 'john@back4app.com');
      User.set('location', 'john@back4app.com');

      // save it on Back4App Data Store
      await User.save();
      alert('User saved!');
    } catch (error) {
      console.log('Error saving new User: ', error);
    }
  }

  async function fetchUser() {
    // create your Parse Query using the User Class you've created
    const query = new Parse.Query('User');
    // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
    query.equalTo('name', 'John');
    // run the query
    const User = await query.first();
    // access the Parse Object attributes
    console.log('User first-name: ', User.get('first-name'));
    console.log('User last-name: ', User.get('last-name'));
    console.log('User email: ', User.get('email'));
    console.log('User password: ', User.get('password'));
    console.log('User id: ', User.id);
    setUser(User);
  }