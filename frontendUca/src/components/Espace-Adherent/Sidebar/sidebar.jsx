import './sidebar.css';
import React, {useEffect} from "react";
import {useNavigate} from "react-router";
import {accountService} from "../../../services/AccountService";

function Sidebar() {
    useEffect(() => {
        let list = document.querySelectorAll('.liSideEA');
        function activeLink() {
            list.forEach((item) => item.classList.remove('hovered'));
            this.classList.add('hovered');
        }
        list.forEach((item) => item.addEventListener('mouseover', activeLink));

        return () => {
            // Nettoyer les écouteurs d'événements lorsque le composant est démonté
            list.forEach((item) => item.removeEventListener('mouseover', activeLink));
        };
    }, []);
    const navigate = useNavigate();
    const logout = () => {
        accountService.logout()
        navigate('/login')
    }
    return (
        <>
            <aside className="sideEs">
                <ul className="ulSideEA">
                    <li className="liSideEA"><a href="#" className="aSideEA"><span
                        className="fas fa-user-circle iconSideEs"/><span className="motsSideEA">Espace Adhérent</span></a>
                    </li>
                    <li className="liSideEA"><a onClick={()=>{navigate("/EspaceAdherent")}} className="aSideEA"><span
                        className="fa fa-home iconSideEs"/><span className="motsSideEA">Accueil</span></a>
                    </li>
                    <li className="liSideEA"><a className="aSideEA" onClick={()=>{navigate("/monProfil")}}><span
                        className="fa fa-user iconSideEs"/><span className="motsSideEA">Mon Profil</span></a>
                    </li>
                    <li className="liSideEA"><a className="aSideEA" onClick={()=>{navigate("/Famille")}}><span
                        className="fas fa-users  iconSideEs"/><span className="motsSideEA">Famille</span></a>
                    </li>
                    <li className="liSideEA"><a className="aSideEA" onClick={()=>{navigate("/mesReservations")}}><span
                        className="far fa-calendar-check iconSideEs"/><span className="motsSideEA">Reservation</span></a>
                    </li>
                    <li className="liSideEA"><a className="aSideEA" onClick={()=>{navigate("/ChangePassword")}}><span
                        className="fa fa-lock iconSideEs"/><span
                        className="motsSideEA">Mot de Passe</span></a>
                    </li>
                    <li className="liSideEA"><a className="aSideEA" onClick={()=>{navigate("/")}}><span
                        className="fa fa-globe iconSideEs"/><span className="motsSideEA">Le Club</span></a></li>
                    <li className="liSideEA"><a className="aSideEA" onClick={()=>{navigate("/contact")}}><span
                        className="far fa-envelope iconSideEs"/><span className="motsSideEA">Contactez-nous</span></a>
                    </li>
                    <li className="liSideEA"><a className="aSideEA" onClick={()=>{navigate("/Login")}}><span
                        className="fas fa-sign-out-alt iconSideEs"/><span className="motsSideEA" onClick={logout}>Sign Out</span></a></li>
                </ul>
            </aside>

        </>
    )
};
export default Sidebar;
