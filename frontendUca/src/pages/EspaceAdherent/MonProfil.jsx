import React from 'react';
import Sidebar from "../../components/Espace-Adherent/Sidebar/sidebar";
import Profil from "../../components/Espace-Adherent/profil/profil";
import Navbaar from "../../components/Espace-Adherent/navbaar/navbaar";

const MonProfil = () => {
    return (
        <div className="monProfil">
            <body className="bodyEs">
            <Navbaar />
            <div className="container contPrf">
                <Sidebar />
                <Profil />
            </div>
            </body>
        </div>
    );
};

export default MonProfil;
