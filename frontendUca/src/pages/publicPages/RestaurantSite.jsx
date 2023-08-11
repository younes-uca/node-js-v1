import React from "react";
import Navbar from "../../components/Site/navbar/Navbar";
import Header from "../../components/Site/Header/Header";
import Footer from "../../components/Site/Footer/Footer";
import Gallery from "../../components/Site/gallery/gallery";
import Restaurant from "../../components/Site/Restaurant/restaurant";

const RestaurantSite = () => {
    return(
        <>
            <Navbar/>
            <Header/>
            <Restaurant/>
            <Gallery/>
            <Footer/>
        </>
    )
}
export default RestaurantSite;
