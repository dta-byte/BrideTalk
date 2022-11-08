import { useNavigate } from "react-router-dom";
import { Headline1 } from "../../atoms";

import "./homepage.css";

export const HomePage = () => {
  let navigate = useNavigate();

  const toLoginPage = () => {
    let path = "/login";
    navigate(path);
  };

  const toSignInPage = () => {
    let path = "/sign-up";
    navigate(path);
  };

  return (
    <>

      {/* Container starts*/}
      <div className="container">
        {/* Buttons */}
        <div className="column-right">
      <Headline1 headline="Welcome to a universe for future brides!"></Headline1>
          <button class="login-button" onClick={toLoginPage}>
            {" "}
            Log in
          </button>
          <button class="signin-button" onClick={toSignInPage}>
            {" "}
            Sign in
          </button>
        </div>

        {/* Caroussel */}
        <div className="column-left">Caroussel to come!</div>
        {/* Contianer ends */}
      </div>
    </>
  );
};
