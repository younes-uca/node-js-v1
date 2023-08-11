import React, { useState, useEffect } from "react";
import uca from "../../../images/logoClub.png";
import "./navbar.css";
import {useNavigate} from "react-router";


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;

        if (scrollTop > 80) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const navigate = useNavigate();

    return (
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'scrolled' : ''}`}>
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand navlink" onClick={()=>{navigate("/")}}>
                        <img className="img-link" src={uca} alt="" style={{ height: "80px", width: "100px" }} />
                    </a>
                </div>
                <div className="d-flex align-items-center">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link navlink" aria-current="page" onClick={()=>{navigate("/accueil")}}>
                                Acceuil
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navlink" onClick={()=>{navigate("/logement")}}>
                                Logements
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navlink" onClick={()=>{navigate("/restaurant")}}>
                                Restaurant
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link navlink" onClick={()=>{navigate("/activite")}}>Activités</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link navlink" onClick={()=>{navigate("/seminaire")}}>Séminaire</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link navlink" onClick={()=>{navigate("/contact")}}>Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-but">
                            <a className="btn btn-outline-light navlink" onClick={()=>{navigate("/reservation")}}>
                                Réserver
                            </a>
                        </li>
                        <li className="nav-but">
                            <a className="btn btn-outline-light navlink" onClick={()=>{navigate("/EspaceAdherent")}}>
                                Espace Adherent
                            </a>
                        </li>
                        <li className="nav-but">
                            <a className="btn btn-outline-light navlink" onClick={()=>{navigate("/information")}}>
                                About Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
