import React from "react";
import Navbar from "../../components/Site/navbar/Navbar";
import Header from "../../components/Site/Header/Header";
import Home from "../../components/Site/Home/Home";
import Footer from "../../components/Site/Footer/Footer";
import Gallery from "../../components/Site/gallery/gallery";
import Restaurant from "../../components/Site/Restaurant/restaurant";
import Contact from "../../components/Site/Contact/contact";

const ContactPage = () => {
    return(
        <>
            <Navbar/>
            <Header/>
            <Contact/>
            <Gallery/>
            <Footer/>
        </>
    )
}
export default ContactPage;
