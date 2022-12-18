import { useNavigate } from "react-router-dom";
import { Carousel } from "../../molecule";
import { CarouselItem } from "../../atoms";
import carouselHair from "./Hair.jpg";
import carouselPhotographer from "./Photographer.jpg";
import carouselVenue from "./Venue.jpg";
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

        <div className="homepage-column-right">
          <div className="carousel-headline">
            We got you covered in your area!
          </div>
          <Carousel>
            <CarouselItem
              className="carouselHair"
              image={carouselHair}
            ></CarouselItem>
            <CarouselItem image={carouselPhotographer}></CarouselItem>
            <CarouselItem image={carouselVenue}></CarouselItem>
          </Carousel>
        </div>
        {/* Container ends */}
      </div>
    </>
  );
};
