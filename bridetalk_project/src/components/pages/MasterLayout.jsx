import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, CreateUserPage, ResetPasswordPage } from ".";
import { Footer, Navbar } from "../molecule";

import "./masterlayout.css"

import { PersonComponent } from "./PersonComponent";

// MasterLayout renders different (master) pages in DOM
export const MasterLayout = () => {
    return (
        <>

            <BrowserRouter>
                <div className="background-img">

                    <Navbar />
                   
                    <Routes>
                        {/* Private route */}
                        {/* <Route
                            path="/chat"
                            element={
                                <AuthWrapper>
                                    <ChatPage />
                                </AuthWrapper>
                            }
                        /> */}
                        
                        {/* Public route for HomePage */}
                        <Route path="/" element={<HomePage />} />

                        {/* Public route for LogIn page */}
                        <Route path="/login" element={<LoginPage />} />

                        {/* Public route for Create User page */}
                        <Route path="/sign-up" element={<CreateUserPage />} />

                        {/* Public route for reset page */}
                        <Route path="/reset" element={<ResetPasswordPage />} />
                        <Route path="/person" element={<PersonComponent />} />

                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    )
}