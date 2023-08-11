import React from "react";
import { Route, Routes} from "react-router-dom";
import Error from '../utils/Error'
import LoginPage from "../pages/AuthSite/LoginPage";



const LoginSiteRoute = () => {
    return (
        <Routes>
            <Route index element={<LoginPage/>}/>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default LoginSiteRoute;
