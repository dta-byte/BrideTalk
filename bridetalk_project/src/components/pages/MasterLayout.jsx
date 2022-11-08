import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./homepage/HomePage";
import { LoginPage } from "./login/LogInPage";
import { CreateUserPage } from "./create-user/CreateUserPage";
import { ResetPage } from "./reset-password/ResetPage";
 import { Footer, Navbar } from "../molecule";

import "./masterlayout.css"


export const MasterLayout = () => {
    return (
        <>
        
        <BrowserRouter>
        <div className="img">

        <Navbar/>
            <Routes classname="routes">
            {/* Public route for HomePage */}
            <Route path="/" element={<HomePage />}></Route>

            {/* Public route for LogIn page */}
            <Route path="/login" element={<LoginPage />}></Route> 

            {/* Public route for Create User page */}
            <Route path="/sign-up" element={<CreateUserPage />}></Route> 

            {/* Public route for reset page */}
            <Route path="/Reset" element={<ResetPage />}></Route> 

            </Routes>
        <Footer/>
            </div>
        </BrowserRouter>
        </>
    )
}