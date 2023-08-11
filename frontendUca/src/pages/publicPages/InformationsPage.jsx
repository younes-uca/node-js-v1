import React from "react";
import Navbar from "../../components/Site/navbar/Navbar";
import Header from "../../components/Site/Header/Header";
import Footer from "../../components/Site/Footer/Footer";
import Gallery from "../../components/Site/gallery/gallery";
import Info from "../../components/Site/Info/Info";

const InformationPage = () => {
    return(
        <>
            <Navbar/>
            <Header/>
            <Info/>
            <Gallery/>
            <Footer/>
        </>
    )
}
export default InformationPage;
