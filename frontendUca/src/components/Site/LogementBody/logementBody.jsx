import './logementBody.css';
import chambre1 from "../../../images/chambre1.jpg";
import chambre2 from "../../../images/chambre2.jpg";
import toilet2 from "../../../images/toilet2.jpg";
import studio1 from "../../../images/studio1.jpg";
import bungalow1 from "../../../images/bungalow1.jpg";
import bungalow2 from "../../../images/bungalow2.jpg";
import bungalow3 from "../../../images/bungalow3.jpg";
import bungalow4 from "../../../images/bangalow4.jpg";
import nature5 from "../../../images/nature5.jpg";
import toilet1 from "../../../images/toilet1.jpg";
import riad1 from "../../../images/riad1.JPG";
import React from "react";
import {useNavigate} from "react-router";

function LogementBody() {
    const navigate = useNavigate();
    return (
        <>
            <section className="available merriweather py-5">
                <div className="container">
                    <h2 className="text-center pb-5 logTitre">Logement</h2>
                    <div>
                        <p className="paragrapheLog">Bienvenue dans notre Club, où vous trouverez un large éventail
                            d'options d'hébergement pour un séjour parfait. Que vous préfériez une chambre confortable,
                            un bungalow pittoresque, un studio moderne ou un riad traditionnel, nous avons tout ce qu'il
                            faut pour répondre à vos besoins.</p>
                    </div>

                    <div className="row pt-5">
                        <div className="card my-5 border-0 rounded-0">
                            <div className="row">
                                <div className="col-md-6">
                                    <div id="carouselExampleControls" className="carousel slide"
                                         data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={chambre1}
                                                     className="d-block w-100 imgSite"
                                                     alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={chambre2}
                                                     className="d-block w-100 imgSite"
                                                     alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={toilet2}
                                                     className="d-block w-100 imgSite"
                                                     alt="..."/>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button"
                                                data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button"
                                                data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body px-0">
                                        <h3 className="card-title chambre">CHAMBRES</h3>
                                        <p className="card-text textLog">
                                            <p> Découvrez notre chambre spacieuse et moderne, idéale pour accueillir
                                                jusqu'à
                                                trois personnes. Cette chambre confortable est équipée de trois lits
                                                individuels soigneusement .</p>

                                            <p> Pour votre confort, la chambre est équipée d'un système de climatisation
                                                pour réguler la température ambiante. Profitez également d'une salle de
                                                bain privée avec une douche rafraîchissante .</p>

                                            <p> Restez connecté avec le monde grâce à notre télévision dans la chambre.
                                                Les fenêtres inondent la chambre de lumière naturelle, créant une
                                                atmosphère
                                                lumineuse et accueillante.</p>
                                        </p>
                                        <div className="buttonContainer"><a href="#tabPrix"
                                                                            className="tarifBtn px-4 py-2 fs-5 mt-3">Voir
                                            Le Tarif</a>
                                            <a onClick={()=>{navigate("/reservation")}}
                                               className="tarifBtn px-4 py-2 fs-5 mt-3">Reserver Maintenant</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="card my-5 border-0 rounded-0">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card-body px-0">
                                        <h3 className="card-title chambre">STUDIO</h3>
                                        <p className="card-text textLog">
                                            <p> Découvrez notre studio moderne et chic, conçu pour vous offrir un séjour
                                                mémorable. Avec ses deux lits confortables, dont un lit double pour deux
                                                personnes et un lit simple pour une personne. </p>
                                            <p>Profitez du
                                                climatiseur pour réguler la température à votre goût, de la douche
                                                privée
                                                pour vous rafraîchir après une longue journée et une toilette pour
                                                votre
                                                confort. </p>
                                            <p>Détendez-vous devant la télévision et profitez de la vue à travers
                                                les fenêtres qui illuminent l'espace. </p>
                                        </p>
                                        <div className="buttonContainer"><a href="#tabPrix"
                                                                            className="tarifBtn px-4 py-2 fs-5 mt-3">Voir
                                            Le Tarif</a>
                                            <a onClick={()=>{navigate("/reservation")}}
                                               className="tarifBtn px-4 py-2 fs-5 mt-3">Reserver Maintenant</a></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div id="carouselExampleControls3" className="carousel slide"
                                         data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={studio1}
                                                     className="d-block w-100 imgSite"
                                                     alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={toilet2}
                                                     className="d-block w-100 imgSite"
                                                     alt="..."/>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button"
                                                data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button"
                                                data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="card my-5 border-0 rounded-0">
                            <div className="row">
                                <div className="col-md-6">
                                    <div id="carouselExampleControls2" className="carousel slide"
                                         data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={bungalow2}
                                                     className="d-block w-100 imgSite"
                                                     alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={bungalow1}
                                                     className="d-block w-100 imgSite"
                                                     alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={bungalow4}
                                                     className="d-block w-100 imgSite imgSite"
                                                     alt="..."/>
                                            </div> <div className="carousel-item">
                                                <img src={bungalow3}
                                                     className="d-block w-100 imgSite"
                                                     alt="..."/>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button"
                                                data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button"
                                                data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body px-0">
                                        <h3 className="card-title chambre">BUNGALOW</h3>
                                        <p className="card-text textLog">
                                            <p> Bienvenue dans notre bungalow charmant et pittoresque.Il comprend une
                                                chambre
                                                spacieuse avec un lit double. Vous pourrez réguler la température selon
                                                vos préférences grâce au
                                                système de climatisation.</p>

                                            <p> Le bungalow est également équipé d'une salle de bain privée avec une
                                                douche
                                                et une toilette. Vous trouverez également un
                                                réfrigérateur pratique, idéal pour conserver vos boissons fraîches .</p>

                                            <p> Profitez du grand salon aménagé avec goût, où vous pourrez vous détendre
                                                devant la télévision . De plus,
                                                vous pourrez profiter d'une terrasse
                                                offrant une vue magnifique sur le jardin et la nature environnante.</p>
                                        </p>
                                        <div className="buttonContainer"><a href="#tabPrix"
                                                                            className="tarifBtn px-4 py-2 fs-5 mt-3">Voir
                                            Le Tarif</a>
                                            <a onClick={()=>{navigate("/reservation")}}
                                               className="tarifBtn px-4 py-2 fs-5 mt-3">Reserver Maintenant</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="card my-5 border-0 rounded-0">
                            <div className="row pt-5">
                                <div className="col-md-6">
                                    <div className="card-body px-0">
                                        <h3 className="card-title chambre">RIAD</h3>
                                        <p className="card-text textLog">
                                            <p> Bienvenue dans notre bungalow charmant et pittoresque.Il comprend une
                                                chambre
                                                spacieuse avec un lit double. Vous pourrez réguler la température selon
                                                vos préférences grâce au
                                                système de climatisation.</p>

                                            <p> Le bungalow est également équipé d'une salle de bain privée avec une
                                                douche
                                                et une toilette. Vous trouverez également un
                                                réfrigérateur pratique, idéal pour conserver vos boissons fraîches .</p>

                                            <p> Profitez du grand salon aménagé avec goût, où vous pourrez vous détendre
                                                devant la télévision . De plus,
                                                vous pourrez profiter d'une terrasse
                                                offrant une vue magnifique sur le jardin et la nature environnante.</p>
                                        </p>
                                        <div className="buttonContainer"><a href="#tabPrix"
                                                                              className="tarifBtn px-4 py-2 fs-5 mt-3">Voir
                                            Le Tarif</a>
                                        <a onClick={()=>{navigate("/reservation")}}
                                                className="tarifBtn px-4 py-2 fs-5 mt-3">Reserver Maintenant</a></div>

                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div id="carousel-2" className="carousel slide"
                                         data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={riad1}
                                                     className="d-block w-100 imgSite"
                                                     alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={toilet1}
                                                     className="d-block w-100 imgSite"
                                                     alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={nature5}
                                                     className="d-block w-100 imgSite"
                                                     alt="..."/>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button"
                                                data-bs-target="#carousel-2" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button"
                                                data-bs-target="#carousel-2" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="tabPrix" className="tarifsLog">
                        <h2 className="titreTab">Tableau des Tarifs d'Hébergement</h2>
                        <div className="pt-3 pb-4">
                            <table className="tableLog">
                                <tr>
                                    <th>Type de Logement</th>
                                    <th>1 personne</th>
                                    <th>2 personnes</th>
                                    <th>3 personnes</th>
                                    <th>4 personnes</th>
                                    <th>5 personnes</th>
                                    <th>6 personnes</th>
                                </tr>
                                <tr>
                                    <td className="tdTab">Chambre et Studio</td>
                                    <td className="prixLog">150 DH</td>
                                    <td className="prixLog">180 DH</td>
                                    <td className="prixLog">300 DH</td>
                                    <td className="prixLog">—</td>
                                    <td className="prixLog">—</td>
                                    <td className="prixLog">—</td>
                                </tr>
                                <tr>
                                    <td className="tdTab">Bungalow et Riad</td>
                                    <td className="prixLog">300 DH</td>
                                    <td className="prixLog">300 DH</td>
                                    <td className="prixLog">300 DH</td>
                                    <td className="prixLog">400 DH</td>
                                    <td className="prixLog">400 DH</td>
                                    <td className="prixLog">400 DH</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default LogementBody;
