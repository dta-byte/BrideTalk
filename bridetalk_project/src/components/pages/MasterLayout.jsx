import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./homepage/HomePage";
import { LoginPage } from "./login/LogInPage";
import { CreateUserPage } from "./create-user/CreateUserPage";
import { Footer } from "../molecule/navigation/footer/Footer";
import { ResetPage } from "./reset-password/ResetPage";

import "./masterlayout.css"
import { Navbar } from "../molecule/navigation/navbar/Navbar";


export const MasterLayout = () => {
    return (
        <>
        
        <BrowserRouter>

        <div className="img">
        <Navbar></Navbar>
            <Routes classname="routes">
            {/* Public route for HomePage */}
            <Route path="/" element={<HomePage />}></Route>

            {/* Public route for LogIn page */}
            <Route path="/login" element={<LoginPage />}></Route> 

            {/* Public route for Create User page */}
            <Route path="/sign-up" element={<CreateUserPage />}></Route> 

            {/* Public route for Create User page */}
            <Route path="/Reset" element={<ResetPage />}></Route> 

            </Routes>
            <Footer></Footer>
            </div>
        </BrowserRouter>
        </>
    )
}