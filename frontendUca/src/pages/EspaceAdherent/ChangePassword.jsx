import React from 'react';
import Sidebar from "../../components/Espace-Adherent/Sidebar/sidebar";
import Navbaar from "../../components/Espace-Adherent/navbaar/navbaar";
import ChangePassword from "../../components/Espace-Adherent/ChangePassword/ChangePassword";

const Password = () => {
    return (
        <div>
            <Navbaar />
                <Sidebar />
            <ChangePassword/>
        </div>
    );
};

export default Password;
