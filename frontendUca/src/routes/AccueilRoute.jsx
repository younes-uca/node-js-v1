import { Route, Routes} from "react-router-dom";
import React from "react";
import Accueil from "../pages/publicPages/Accueil";
import Logement from "../pages/publicPages/Logement";
import RestaurantSite from "../pages/publicPages/RestaurantSite";
import ActiviteSite from "../pages/publicPages/ActiviteSite";
import ContactPage from "../pages/publicPages/ContactPage";
import ReservationPage from "../pages/publicPages/ReservationPage";
import InformationPage from "../pages/publicPages/InformationsPage";
import SalleSeminaire from "../pages/publicPages/SalleSeminaire";

import Error from '../utils/Error'
import AccueilAdherent from "../pages/EspaceAdherent/AccueilAdherent";
import MonProfil from "../pages/EspaceAdherent/MonProfil";
import FamilleAdherent from "../pages/EspaceAdherent/famiilePage";
import ReservationEspaceAdherent from "../pages/EspaceAdherent/reservationEspaceAdh";
import ChangePassword from "../pages/EspaceAdherent/ChangePassword";
import ChangePwdSite from "../pages/AuthSite/changePwdSite";
import ResetPwdSite from "../pages/AuthSite/resetPwdSite";
import AuthGuardSite from "../helpers/AuthGuardSite";
import LoginSiteRoute from "./LoginSiteRoute";

const AcceuilRoute = () =>{
    return(
        <>
                <Routes>
                    <Route path="/" element={<Accueil/>}/>
                    <Route path="accueil" element={<Accueil/>}/>
                    <Route path="logement" element={<Logement/>}/>
                    <Route path="restaurant" element={<RestaurantSite/>}/>
                    <Route path="activite" element={<ActiviteSite/>}/>
                    <Route path="information" element={<InformationPage/>}/>
                    <Route path="seminaire" element={<SalleSeminaire/>}/>

                    <Route path="contact" element={<ContactPage/>}/>

                    <Route path="reservation" element={
                        <AuthGuardSite><ReservationPage/></AuthGuardSite>}/>
                    <Route path="EspaceAdherent" element={
                        <AuthGuardSite><AccueilAdherent/></AuthGuardSite>}/>
                    <Route path="monProfil" element={
                        <AuthGuardSite><MonProfil/></AuthGuardSite>}/>
                    <Route path="Famille" element={
                        <AuthGuardSite><FamilleAdherent/></AuthGuardSite>}/>
                    <Route path="mesReservations" element={
                        <AuthGuardSite><ReservationEspaceAdherent/></AuthGuardSite>}/>

                    <Route path="ChangePassword" element={<ChangePassword/>}/>
                    <Route path="changePwd" element={<ChangePwdSite/>}/>
                    <Route path="/resetPassword" element={<ResetPwdSite/>}/>
                    <Route path="/login/*" element={<LoginSiteRoute/>}/>
                    <Route path="*" element={<Error />} />

                </Routes>
        </>
    )
}
export default AcceuilRoute;
