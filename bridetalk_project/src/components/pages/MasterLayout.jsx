import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./homepage/HomePage";
import { LoginPage } from "./login/LogInPage";
import { CreateUserPage } from "./create-user/CreateUserPage";

export const MasterLayout = () => {
    return (
        <>
        <BrowserRouter>

            <Routes>
            {/* Public route for HomePage */}
            <Route path="/" element={<HomePage />}></Route>

            {/* Public route for LogIn page */}
            <Route path="/login" element={<LoginPage />}></Route> 

            {/* Public route for Create User page */}
            <Route path="/create-user" element={<CreateUserPage />}></Route> 

            </Routes>
            
        </BrowserRouter>
        </>
    )
}