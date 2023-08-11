import './activite.css';
import piscine3 from "../../../images/piscine3.jpg";
import tennis from "../../../images/tennis.jpg";
import terrain from "../../../images/terrain.jpg";
import jeux from "../../../images/jeux.jpg";
import React from "react";
import {useNavigate} from "react-router";

function Activite() {
    const navigate = useNavigate();
    return (
        <>
            <section className="available merriweather py-5">
                <div className="container">
                    <h2 className="text-center pb-5 logTitre">Les Activités</h2>
                    <div>
                        <p className="paragrapheLog">Notre club offre une multitude d'activités pour tous les
                            membres de la famille. Plongez dans notre piscine rafraîchissante pour vous détendre et
                            profiter du soleil. Les amateurs de sports peuvent jouer au differents Loisirs sur nos
                            courts bien entretenus. De plus, nos jeunes invités trouveront leur bonheur dans notre aire
                            de jeux spécialement conçue pour eux. Quelle que soit votre préférence, vous trouverez chez
                            nous des divertissements pour tous les goûts.</p>
                    </div>

                    <div className="row pt-5">
                        <div className="card my-5 border-0 rounded-0">
                            <div className="row">
                                <div className="col-md-6">
                                            <div>
                                                <img src={piscine3}
                                                     className="d-block w-100 imgRes"
                                                     alt="..."/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body px-0">
                                        <h3 className="card-title chambre">Piscine</h3>
                                        <p className="card-text textLog">
                                            <p> Notre club comprend trois piscines allant de petite à grande
                                                taille, offrant ainsi une variété d'options pour satisfaire tous les
                                                goûts. </p>
                                            <p>En tant qu'adhérent, vous bénéficiez d'un accès gratuit à nos
                                                installations aquatiques, où vous pourrez vous rafraîchir et vous amuser
                                                tout au long de la journée.
                                            </p>

                                            <p> Pour les invités, nous proposons un tarif d'entrée abordable. Les
                                                enfants de <span className="motPis"> moins de 12 ans </span> peuvent
                                                profiter de notre piscine moyennant
                                                un tarif de <span className="motPis"> 25 DH </span> pour toute la
                                                journée, tandis que les personnes de
                                                <span className="motPis"> plus de 12 ans </span> peuvent accéder à nos
                                                installations moyennant un tarif de
                                                <span className="motPis"> 40 DH </span>, également valable pour toute la
                                                journée.</p>
                                        </p>
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
                                        <h3 className="card-title chambre">Tennis</h3>
                                        <p className="card-text textLog">
                                            <p>
                                                Notre court de tennis est un lieu idéal pour les passionnés de ce sport.
                                                Les adhérents peuvent profiter gratuitement de notre court, offrant
                                                ainsi une excellente opportunité de pratiquer leur jeu et de
                                                s'améliorer.</p>
                                            <p>Pour nos invités, nous proposons une option de location payante. Pour
                                                seulement <span className="motPis"> 20 DH </span> , les invités peuvent
                                                réserver le court de tennis pour
                                                une heure et profiter de leur session de jeu. </p>
                                            <p> Apportez votre raquette, enfilez vos chaussures de sport et
                                                préparez-vous à vivre des moments excitants sur notre court bien
                                                entretenu.</p>
                                        </p>
                                        <div className="buttonContainer">
                                            <a onClick={()=>{navigate("/contact")}}
                                               className="tarifBtn px-4 py-2 fs-5 mt-3">Reserver Maintenant</a></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                                <img src={tennis}
                                                     className="d-block w-100"
                                                     alt="..."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="card my-5 border-0 rounded-0">
                            <div className="row">
                                <div className="col-md-6">
                                    <div >
                                                <img src={terrain}
                                                     className="d-block w-100"
                                                     alt="..."/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body px-0">
                                        <h3 className="card-title chambre">Sports</h3>
                                        <p className="card-text textLog">
                                            <p> Notre club propose une variété de sports pour satisfaire les
                                                amateurs de<span className="motPis"> basketball </span>,<span
                                                    className="motPis"> handball </span>et <span
                                                    className="motPis"> football </span>. Que vous soyez un joueur
                                                passionné ou que vous souhaitiez simplement vous amuser avec des amis.
                                            </p>

                                            <p>Nous encourageons l'esprit sportif et le plaisir de jouer ensemble.
                                                Notre objectif est de fournir un environnement sûr et bien entretenu où
                                                vous pouvez profiter de vos sports préférés sans frais
                                                supplémentaires.</p>

                                            <p>Rassemblez votre équipe, apportez votre équipement et préparez-vous à
                                                vivre des moments de sport intenses et amusants dans notre
                                                club.</p>
                                        </p>
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
                                        <h3 className="card-title chambre">aire de jeux</h3>
                                        <p className="card-text textLog">
                                            <p>Notre aire de jeux dédiée aux enfants est un véritable paradis pour les
                                                jeunes aventuriers. Nous avons conçu un espace ludique comprenant
                                                plusieurs jeux amusants et divertissants pour garantir des heures de
                                                plaisir aux enfants.</p>

                                            <p>Ils pourront s'amuser sur nos balançoires, dévaler les toboggans et
                                                grimper sur les structures de jeu. Notre aire de jeux est conçue pour
                                                offrir à vos enfants un environnement sûr et sécurisé où ils pourront
                                                développer leurs compétences motrices, interagir avec d'autres enfants
                                                et laisser libre cours à leur imagination.</p>

                                            <p> Nous sommes ravis de créer un environnement accueillant où les enfants
                                                peuvent se défouler, s'amuser et créer des souvenirs joyeux.</p>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                            <div>
                                                <img src={jeux}
                                                     className="d-block w-100"
                                                     alt="..."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Activite;
