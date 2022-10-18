import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./HomePage/HomePage";

export const MasterLayout = () => {
    return (
        <>
        <BrowserRouter>

            <Routes>
            {/* Public route for HomePage */}
            <Route path="/" element={<HomePage />}>

            </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}