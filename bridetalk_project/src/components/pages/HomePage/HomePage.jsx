import { useNavigate } from "react-router-dom";
import { BodyText, Headline1 } from "../../atoms";

import "./homepage.css";

export const HomePage = () => {
  let navigate = useNavigate();

  const toLoginPage = () => {
    let path = "/login";
    navigate(path);
  };

  const toSignUpPage = () => {
    let path = "/sign-up";
    navigate(path);
  };

  return (
    <>

      {/* Container starts*/}
      <div className="homepage-container">
        {/* Buttons */}
        <div className="homepage-column-right">
      <Headline1 headline="Welcome to a universe for future brides!"></Headline1>
      <div className="buttons-container">

          <button class="login-button" onClick={toLoginPage}>
            {" "}
            Log in
          </button>
          <button class="signin-button" onClick={toSignUpPage}>
            {" "}
            Sign up
          </button>
      </div>
        </div>

        {/* Caroussel */}
        <div className="homepage-column-left">
        <BodyText text="Carousel to come!"></BodyText>
       </div>
        {/* Container ends */}
      </div>
    </>
  );
};
