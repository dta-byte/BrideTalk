import { useNavigate } from "react-router-dom";
import { Carousel } from "../../molecule";
import { CarouselItem } from "../../atoms";
// import { useHistory } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Parse from "parse";

import "./homepage.css";
// import { ChatSetup } from "../Chat/ChatSetUp";

export const HomePage = () => {
  let navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  // // State variables holding input values and flags
  // const [currentUser, setCurrentUser] = useState(null);

  //   // This effect hook runs at every render and checks if there is a
  // // logged in user, redirecting to Log-in screen if needed
  // useEffect(() => {
  //   const checkCurrentUser = async () => {
  //     try {
  //       const user = await Parse.User.currentAsync();
  //       if (user === null || user === undefined) {
  //         console.log("No user is logged in, go to homepage")
  //         navigate("/");
  //       } else {
  //         if (currentUser === null) {
  //           setCurrentUser(user);
  //         }
  //       }
  //       return true;
  //     } catch (error) {}
  //     return false;
  //   };
  //   checkCurrentUser();
  // });

  return (
    <>
      {/* Container starts*/}
      <div className="homepage-container">
        {/* Buttons */}
        <div className="homepage-column-left">
          <div className="homepage-headline">
            Welcome to a universe for future brides!
          </div>
          <div className="buttons-container">
            <button
              className="login-button"
              onClick={() => navigateTo("/login")}
            >
              {" "}
              Log in
            </button>
            <button
              className="signin-button"
              onClick={() => navigateTo("/sign-up")}
            >
              {" "}
              Sign up
            </button>
          </div>
        </div>

        {/* Caroussel */}

        <div className="homepage-column-right"></div>
        <Carousel>
          <CarouselItem>Wedding venues near you</CarouselItem>
          <CarouselItem>Best tips on hair</CarouselItem>
          <CarouselItem>Fun bands</CarouselItem>
        </Carousel>
        {/* Container ends */}
      </div>
    </>
  );
};
