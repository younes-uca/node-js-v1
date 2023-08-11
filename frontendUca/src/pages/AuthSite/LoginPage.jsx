import React from "react";
import Navbar from "../../components/Site/navbar/Navbar";
import Footer from "../../components/Site/Footer/Footer";
import Login from "../../components/Authentification/login/login";

const LoginPage = () => {
    return(
        <>
            <Navbar/>
            <Login/>
            <Footer/>
        </>
    )
}
export default LoginPage;
