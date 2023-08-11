import React from "react";
import Navbar from "../../components/Site/navbar/Navbar";
import Header from "../../components/Site/Header/Header";
import Footer from "../../components/Site/Footer/Footer";
import LogementBody from "../../components/Site/LogementBody/logementBody";
import Gallery from "../../components/Site/gallery/gallery";

const Logement = () => {
    return(
        <>
            <Navbar/>
            <Header/>
            <LogementBody/>
            <Gallery/>
            <Footer/>
        </>
    )
}
export default Logement;
