import React from "react";
import { Route, Routes} from "react-router-dom";
import Error from '../utils/Error'
import LoginDash from "../components/dashboardComp/LoginDash/loginDash";



const LoginDashRoute = () => {
    return (
        <Routes>
            <Route index element={<LoginDash/>}/>
            <Route path="loginDashboard" element={<LoginDash/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default LoginDashRoute;
