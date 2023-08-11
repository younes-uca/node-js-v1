import React from "react";
import "./footer.css";
import uca from "../../../images/uca.png";
import {FaMapMarkerAlt} from "react-icons/fa";
import {BsTelephoneFill} from "react-icons/bs";
import 'aos/dist/aos.css';
import {useNavigate} from "react-router";

const Footer  = () => {

    const navigate = useNavigate();

        return (
            <footer className="footerUca bg-light">
                <div className="container-fluid py-5 px-lg-5" >
                    <h1 className="mb-3 textFooter ">Club<sub className="subFooter">Uca</sub></h1>
                    <div className="row rowFooter">
                        <div className="col-md-4 colFooter">
                            <img className="pt-2" src={uca} alt=""/>
                        </div>
                        <div className="col-md-4 colFooter text-center">
                            <h2 className="text-uppercase titlefooter pt-4">Contact</h2>
                            <p className="mt-5 pt-1 fw-bold paragFooter">
                                <FaMapMarkerAlt className="iconFooter" href=""/> <a className="btn btn-link footerLink fw-bold" target="_blank" href="https://g.co/kgs/LvCp9i">149 Rue Ibn Zohair, Marrakech 40000</a>
                            </p>
                            <p className="pt-4 fw-bold paragFooter">
                                <BsTelephoneFill className="iconFooter" /> <a className="btn btn-link footerLink fw-bold" href="tel:+212 623 51 26 98">+212623512698</a>
                            </p>
                        </div>
                        <div className="d-grid gridFooter col-md-4 text-center">
                            <h2 className="text-uppercase pt-4 titlefooter">Navigation</h2>
                            <a className="btn btn-link footerLink fw-bold" onClick={()=>{navigate("/logement")}}>Logements</a>
                            <a className="btn btn-link footerLink fw-bold" onClick={()=>{navigate("/restaurant")}}>Restaurant</a>
                            <a className="btn btn-link footerLink fw-bold" onClick={()=>{navigate("/activite")}}>Activités</a>
                            <a className="btn btn-link footerLink fw-bold" onClick={()=>{navigate("/seminaire")}}>Séminaire</a>
                        </div>
                    </div>
                    <div className="text-center">
                        <small className="pt-4 smallFooter">&copy;Copyright 2020. All Rights Reserved By:
                            <strong className="strongFooter"> ClubUca</strong>
                        </small>
                    </div>
                </div>
            </footer>
        )
}

export default Footer;
