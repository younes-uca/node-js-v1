import './restaurant.css';
import image1 from "../../../images/ftour.jpg";
import image2 from "../../../images/tajineViande.jpg";
import image3 from "../../../images/tacos.jpg";
import image4 from "../../../images/sundwich.png";
import image5 from "../../../images/burger.jpg";
import image6 from "../../../images/couscous.jpg";
import image7 from "../../../images/tajinePoulet.jpg";
import image8 from "../../../images/plat.jpg";
import image9 from "../../../images/piscine2.jpg";
import React from "react";
import {useNavigate} from "react-router";

function Restaurant() {
    const navigate = useNavigate();
    return (

        <>
            <div className="restaurant">
                <section className="available merriweather py-5">
                    <div className="container">
                        <h2 className="text-center pb-5 logTitre">Notre Restaurant</h2>
                        <div>
                            <p className="paragrapheLog">Bienvenue dans notre restaurant animé et
                                accueillant qui offre une expérience culinaire exceptionnelle. Avec sa proximité de la
                                piscine, sa terrasse ensoleillée et sa salle intérieure, il propose différents espaces
                                où les clients peuvent profiter d'un repas.</p>
                        </div>

                        <div className="row pt-5">
                            <div className="card my-5 border-0 rounded-0">
                                <div className="row">
                                    <div className="col-md-6">
                                                <div >
                                                    <img src={image9}
                                                         className="d-block w-100 imgRes"
                                                         alt="..."/>
                                                </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body px-0">
                                            <p className="card-text textLog">
                                                <p> Il est ouvert tout au long de la journée,
                                                    vous permettant de vous régaler à l'heure qui vous convient le
                                                    mieux. Que ce soit pour un petit-déjeuner énergisant, un déjeuner
                                                    rapide ou un dîner élaboré .</p>

                                                <p> Le restaurant organise des événements dans un
                                                    cadre élégant, offrant une
                                                    ambiance animée et festive. Avec des menus personnalisés. Nous
                                                    garantissons une expérience culinaire
                                                    exceptionnelle pour rendre votre événement mémorable.</p>
                                                <p> Réservez votre prochain événement et laissez-nous créer une
                                                    expérience inoubliable pour vous et vos invités</p>
                                            </p>
                                            <div className="buttonContainer">
                                                <a onClick={()=>{navigate("/contact")}}
                                                   className="tarifBtn px-4 py-2 fs-5 mt-3">Réserver maintenant</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="menu" id="menu">
                    <h2 className="text-center pb-5 chambre">Notre Menu</h2>
                    <p className="paragrapheLog">Le restaurant propose une cuisine variée et délicieuse, avec
                        un large éventail de plats . </p>
                    <div className="contenu">
                        <div className="box">
                            <div className="imbox">
                                <img className="imgRest" src={image1} alt=""/>
                            </div>
                            <div className="text">
                                <h3 className="h3Rest">Special ftour</h3>
                            </div>
                        </div>
                        <div className="box">
                            <div className="imbox">
                                <img className="imgRest" src={image2} alt=""/>
                            </div>
                            <div className="text">
                                <h3 className="h3Rest">Specials tajine</h3>
                            </div>
                        </div>
                        <div className="box">
                            <div className="imbox">
                                <img className="imgRest" src={image3} alt=""/>
                            </div>
                            <div className="text">
                                <h3 className="h3Rest">Specials tacos</h3>
                            </div>
                        </div>
                        <div className="box">
                            <div className="imbox">
                                <img className="imgRest" src={image7} alt=""/>
                            </div>
                            <div className="text">
                                <h3 className="h3Rest">Specials tajine</h3>
                            </div>
                        </div>
                        <div className="box">
                            <div className="imbox">
                                <img className="imgRest" src={image5} alt=""/>
                            </div>
                            <div className="text">
                                <h3 className="h3Rest">Specials burgers</h3>
                            </div>
                        </div>
                        <div className="box">
                            <div className="imbox">
                                <img className="imgRest" src={image6} alt=""/>
                            </div>
                            <div className="text">
                                <h3 className="h3Rest">Special couscous</h3>
                            </div>
                        </div>
                        <div className="box">
                            <div className="imbox">
                                <img className="imgRest" src={image4} alt=""/>
                            </div>
                            <div className="text">
                                <h3 className="h3Rest">Specials sandwich</h3>
                            </div>
                        </div>
                        <div className="box">
                            <div className="imbox">
                                <img className="imgRest" src={image8} alt=""/>
                            </div>
                            <div className="text">
                                <h3 className="h3Rest">Special salade</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
};

export default Restaurant;
