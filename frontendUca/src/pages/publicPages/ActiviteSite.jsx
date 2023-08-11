import React from "react";
import Navbar from "../../components/Site/navbar/Navbar";
import Header from "../../components/Site/Header/Header";
import Footer from "../../components/Site/Footer/Footer";
import Gallery from "../../components/Site/gallery/gallery";
import Activite from "../../components/Site/Activite/activite";

const ActiviteSite = () => {
    return(
        <>
            <Navbar/>
            <Header/>
            <Activite/>
            <Gallery/>
            <Footer/>
        </>
    )
}
export default ActiviteSite;
