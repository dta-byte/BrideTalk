
// import "./mainchatpage.css";
// import { useNavigate,  } from "react-router-dom";
// import { useState } from "react";
// import { Button } from "../../atoms";
// import Parse from "parse"

// export const MainChatPage = () => {
//     let navigate = useNavigate();

//     const [currentUser, setCurrentUser] = useState(null);
 
//   // Function that will return current user and also update current username
//   const getCurrentUser = async function () {
//     const currentUser = await Parse.User.current();
//     // Update state variable holding current user
//     setCurrentUser(currentUser);
//     return currentUser;
//   };

//   getCurrentUser();

//   return (
//     <>

//       {/* Container starts*/}
//       <div className="mainchat-container">
   
//         <div className="mainchat-column-right">
//       <div className="mainchat-headline">Welcome to your chat!</div>
// {/* 

//       {currentUser !== null &&
//         (<div className="container">
//           <h2 className="heading">{'User Screen'}</h2>
        
//           <h2 className="heading">{`Hello ${currentUser.get('username')}!`}</h2>
//           <div className="form_buttons">

//             <Button
//               text={"Go to homepage"}
//               handleClick={() => navigate("/")}
//               />
//               <Button
//               text={"Logout"}
//             //   handleClick={() => doUserLogOut()}
//               />
          
//           </div>
//         </div>)
//       } */}


//       <div className="buttons-container">

//           {/* <button class="login-button" onClick={toLoginPage}>
//             {" "}
//             Log in
//           </button> */}

//           {/* <button class="signin-button" onClick={toSignUpPage}>
//             {" "}
//             Sign up
//           </button> */}
//       </div>
//         </div>

      
//         <div className="mainchat-column-left"/>
       
//         {/* Container ends */}
//       </div>
//     </>
//   );
// };
