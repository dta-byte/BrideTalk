import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./homepage/HomePage";
import { LoginPage } from "./login/LogInPage";
import { CreateUserPage } from "./create-user/CreateUserPage";
import { ResetPasswordPage } from "./reset-password/ResetPasswordPage";
import { Footer, Navbar } from "../molecule";
import { MainChatPage } from "./mainchatpage/MainChatPage";

import "./masterlayout.css";

// MasterLayout renders different (master) pages in DOM

export const MasterLayout = () => {
  return (
    <>
      <BrowserRouter>
        <div className="background-img">
          <Navbar />
          <Routes classname="routes">
            {/* Public route for HomePage */}
            <Route path="/" element={<HomePage />}></Route>

            {/* Public route for LogIn page */}
            <Route path="/login" element={<LoginPage />}></Route>

            {/* Public route for Create User page */}
            <Route path="/sign-up" element={<CreateUserPage />}></Route>

            {/* Public route for reset page */}
            <Route path="/reset" element={<ResetPasswordPage />}></Route>

            {/* Public route for main chat page */}
            <Route path="/chat" element={<MainChatPage />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};
