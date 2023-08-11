import React, {useEffect} from "react";
import "./salle.css";
import image3 from "../../../images/salle1.jpg";
import AOS from "aos";

const Salle = () => {
    useEffect(() => {
        AOS.init();
        return () => {
            AOS.refresh();
        };
    }, []);
    return (
        <div className="salle">
            <div className="container">
                <h2 className="text-center pt-5 header-salle fw-bold" data-aos="fade-down">Salle de Réunion</h2>
                <p className="salle-info text-center" data-aos="fade-up">Le Club UCA met à votre disposition des salles de réunion
                    modernes et bien équipées, offrant un cadre professionnel et confortable pour vos besoins en
                    matière de réunions, de conférences ou d'événements d'entreprise.</p>
                <div className="row pt-4" data-aos="fade-right">
                    <div className="col-sm-12 col-md-6 pt-4">
                        <img src={image3}
                             className="d-block w-100 imgSalle"
                             alt="..."/>
                    </div>
                    <div className="col-sm-12 col-md-6 pt-5"  data-aos="fade-left">
                        <p className="salle-info text-center">Au Club UCA, nous proposons la location de nos salles de
                            réunion à des tarifs compétitifs. Que vous ayez besoin d'un espace pour une réunion
                            d'équipe, une conférence ou un événement professionnel, nous avons la solution idéale pour
                            vous. <span className="span-salle">Notre tarif matinée s'élève à 300 DH</span>, vous donnant accès à notre salle de réunion
                            pendant la matinée. Ce tarif abordable comprend l'utilisation de la salle ainsi que l'accès
                            à nos équipements audiovisuels de pointe pour une présentation efficace.</p>
                        <p className="salle-info text-center"> Si vous avez besoin de plus de temps, <span className="span-salle">notre tarif journée
                            complète est de 500 DH</span>, vous permettant de profiter de la salle de réunion pendant toute la
                            journée.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Salle;
