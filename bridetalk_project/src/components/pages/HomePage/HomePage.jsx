import { useNavigate } from "react-router-dom";
import { MainHeadline, PrimaryButton } from "../../atoms";

import "./homepage.css";

export const HomePage = () => {
    let navigate = useNavigate();

    const toLoginPage = () => {
        let path = "/login";
        navigate(path);
      };

    return (
        <>
            <MainHeadline headline="Home Page"></MainHeadline>

            {/* Container starts*/}
            <div className="container">
                
                {/* Buttons */}
                <div className="container-right">
                <PrimaryButton text={"Log in"} handleClick={toLoginPage}>

          </PrimaryButton>
                </div>
                {/* Caroussel */}
                <div className="container-left">
                eded
                </div>
                {/* Contianer ends */}
            </div>
          
        </>

    )
} 
