import React from "react";
import Navbar from "../../components/Site/navbar/Navbar";
import Header from "../../components/Site/Header/Header";
import Home from "../../components/Site/Home/Home";
import Footer from "../../components/Site/Footer/Footer";
import Gallery from "../../components/Site/gallery/gallery";
const Accueil = () => {
    return(
        <>
            <Navbar/>
            <Header/>
            <Home/>
            <Gallery/>
            <Footer/>
        </>
    )
}
export default Accueil;
