import React from "react";
import Navbar from "../../components/Site/navbar/Navbar";
import Footer from "../../components/Site/Footer/Footer";
import Reservation from "../../components/Site/reservation/reservation";

const ReservationPage = () => {
    return(
        <>
            <Navbar/>
            <Reservation/>
            <Footer/>
        </>
    )
}
export default ReservationPage;
