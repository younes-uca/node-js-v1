import React from "react";

import Navbaar from "../../components/Espace-Adherent/navbaar/navbaar";
import Sidebar from "../../components/Espace-Adherent/Sidebar/sidebar";
import ReservationActuelle from "../../components/Espace-Adherent/reservationActuelle/reservationActuelle";



const ReservationEspaceAdherent = () => {
    return (
        <>
            <Navbaar />
            <Sidebar />
            <ReservationActuelle />
        </>
    );
};

export default ReservationEspaceAdherent;
