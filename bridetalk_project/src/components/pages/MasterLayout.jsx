import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  CreateUserPage,
  ResetPasswordPage,
  MainChatPageComponent,
  JoinGroupOverviewPage,
  AuthWrapper
} from ".";
import { Footer, Navbar } from "../molecule";
import { useAuth } from "./auth/core/Auth";
import { ChatSetup } from "./Chat/ChatSetUp";

import "./masterlayout.css";

// MasterLayout renders different (master) pages in DOM
export const MasterLayout = () => {

  const { currentUser } = useAuth();

  return (
    <>
      <BrowserRouter>
        <div className="background-img">
          <Navbar />

          <Routes>
          {
            currentUser &&
            /* Private route */
            <Route
            path="/chat"
            element={<MainChatPageComponent />}
             />
          }
                          
            {/* Public route for HomePage */}
            <Route path="/" element={<HomePage />} />

            {/* Public route for LogIn page */}
            <Route path="/login" element={<LoginPage />} />

            {/* Public route for Create User page */}
            <Route path="/sign-up" element={<CreateUserPage />} />

            {/* Public route for reset page */}
            <Route path="/reset" element={<ResetPasswordPage />} />

            {/* <Route path="/chat" element={<ChatSetup />} /> */}

            <Route path="/findgroups" element={<JoinGroupOverviewPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};
