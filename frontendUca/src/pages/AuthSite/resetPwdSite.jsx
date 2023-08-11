import React from "react";
import Navbar from "../../components/Site/navbar/Navbar";
import Footer from "../../components/Site/Footer/Footer";
import ResetPwd from "../../components/Authentification/resetPwd/reset";

const ResetPwdSite = () => {
    return(
        <>
            <Navbar/>
            <ResetPwd/>
            <Footer/>
        </>
    )
}
export default ResetPwdSite;
