import React from "react";
import Navbar from "../../components/Site/navbar/Navbar";
import Footer from "../../components/Site/Footer/Footer";
import ChangePwd from "../../components/Authentification/changePwd/changePwd";

const ChangePwdSite = () => {
    return(
        <>
            <Navbar/>
            <ChangePwd/>
            <Footer/>
        </>
    )
}
export default ChangePwdSite;
