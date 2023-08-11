import { Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import React from "react";
import Users from "../pages/Dashboard/Users";
import Adherent from "../pages/Dashboard/Adherent";
import Reservation from "../pages/Dashboard/Reservation";
import DisponibiliteChambres from "../pages/Dashboard/DisponibiliteChambres";
import LoginDash from "../components/dashboardComp/LoginDash/loginDash";
import {Actualite} from "../pages/Dashboard/Actualite";
import Error from "../utils/Error";
import {ContactDash} from "../pages/Dashboard/ContactDash";
const DashRoute = () => {
    return (
        <>
            <Routes>
                    <Route index element={<Dashboard/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="users" element={<Users/>}/>
                    <Route path="adherent" element={<Adherent/>}/>
                    <Route path="reservations" element={<Reservation/>}/>
                    <Route path="disponibiliteChambre" element={<DisponibiliteChambres/>}/>
                    <Route path="actualite" element={<Actualite/>}/>
                    <Route path="contact" element={<ContactDash/>}/>
                    <Route path="loginAdmin" element={<LoginDash/>}/>
                    <Route path="*" element={<Error/>}/>
            </Routes>
        </>
    )
}
export default DashRoute;
