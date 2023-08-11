import React, {useEffect} from "react";
import './info.css';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import AOS from "aos";

const Info = () => {
    useEffect(() => {
        AOS.init();
        return () => {
            AOS.refresh();
        };
    }, []);
    return (
        <div className="info">
            <div className="container-fluid">
                <div className="col-sm-12 text-center mt-5 mb-5" data-aos="fade-down">
                    <h6 className='texts-info fw-semibold'>What i can do for you</h6>
                    <h3 className="header-info fw-bold">Informations de Notre Club</h3>
                </div>
                <div className="col-sm-12 col-md-12" data-aos="flip-up">
                    <p className="intro-info text-center">
                        Bienvenue au Club UCA ! Notre club exclusif vous invite à découvrir une expérience unique
                        alliant hébergements de luxe, installations de loisirs exceptionnelles, et un restaurant
                        gastronomique, le tout dans une ambiance raffinée et conviviale.
                    </p>
                    <p className="intro-info text-center">
                        Le Club UCA est conçu pour offrir à ses membres une escapade inoubliable. Que vous soyez à la
                        recherche d'un séjour relaxant, d'une immersion dans des activités stimulantes ou d'une
                        expérience culinaire exceptionnelle, nous avons tout ce qu'il vous faut.
                    </p>
                </div>
                <div className="row pt-5">
                    <h3 className="text-center cotis-title fw-bold" data-aos="zoom-in">Frais d'adhesion et cotisation annuelle</h3>
                    <div className="col-sm-12 col-md-6 pt-4 px-3" data-aos="fade-right">
                        <h3 className="frais-title text-center fw-bold">Staff de l'Université Uca</h3>
                        <p className="cotis-info text-center pt-3">Bienvenue au Club UCA, l'endroit idéal pour profiter
                            d'une
                            expérience de luxe et de privilèges exclusifs. Pour devenir membre de notre club sélect,
                            vous pouvez commencer par régler les frais d'adhésion uniques de 1600 DH. Une fois cette
                            somme payée, vous deviendrez membre à vie du Club UCA, bénéficiant ainsi d'un accès
                            permanent à toutes nos installations et prestations exclusives.</p>
                        <p className="cotis-info text-center">En plus des frais d'adhésion, nous demandons à nos membres
                            de renouveler leur adhésion chaque année en payant une cotisation annuelle de 1000 DH. Cette
                            cotisation annuelle permet de maintenir la qualité de nos services, de préserver
                            l'excellence de nos installations et de continuer à proposer des expériences uniques à nos
                            membres..</p>
                    </div>
                    <div className="col-sm-12 col-md-6 pt-4 px-3" data-aos="fade-left">
                        <h3 className="frais-title text-center fw-bold">Pour les externes</h3>
                        <p className="cotis-info text-center pt-3">Le Club UCA offre également la possibilité aux
                            personnes externes souhaitant intégrer notre
                            club exclusif de le faire moyennant des frais d'adhésion uniques de 2000 DH. Une fois ces
                            frais payés, les nouveaux membres externes bénéficient d'un accès privilégié à toutes les
                            installations et prestations offertes par le Club UCA.</p>
                        <p className="cotis-info text-center pt-3">En plus des frais d'adhésion, les membres externes
                            devront s'acquitter d'une cotisation annuelle de 1500 DH pour maintenir leur adhésion
                            active. Cette cotisation annuelle contribue à couvrir les frais d'exploitation du club et
                            garantit aux membres externes un accès continu à nos installations et services haut de
                            gamme.</p>
                    </div>
                    <div className="table-frais-container pt-3" data-aos="zoom-out-up">
                        <h2 className="frais-title text-center fw-bold">Les Frais</h2>
                        <table className="tableFrais">
                            <tr>
                                <th style={{backgroundColor: "#ffffff"}}></th>
                                <th className="thead-frais">Frais d'adhesion</th>
                                <th className="thead-frais">Cotisation annuelle</th>
                            </tr>
                            <tr>
                                <th className="th-scope" scope="row">Staff</th>
                                <td className="td-frais">1600dh</td>
                                <td className="td-frais">1000dh</td>
                            </tr>
                            <tr>
                                <th className="th-scope" scope="row">Externe</th>
                                <td className="td-frais">2000dh</td>
                                <td className="td-frais">1500dh</td>
                            </tr>
                        </table>
                    </div>
                    <div className="alert-cotis pt-5" data-aos="zoom-in-down">
                        <h1 className="frais-title text-center fw-bold mt-3">Délai cotisation : Fin Mai / Début
                            Juin</h1>
                        <p className="parag-cotis"><ReportProblemIcon style={{color: "red", fontSize: "30px"}}/> Nous
                            souhaitons vous rappeler l'importance de
                            renouveler votre cotisation annuelle au Club UCA. Le délai de renouvellement approche
                            rapidement, et nous tenons à vous informer que tout paiement effectué après la période
                            désignée ne sera pas considéré comme un renouvellement pour une année complète.</p>
                    </div>
                </div>
                <div>
                        <div className="col-sm-12 col-md-12" data-aos="flip-up">
                            <h1 className="acces-title text-center fw-bold mt-3">Privilèges et Accès pour les
                                Invités</h1>
                            <p className="parag-cotis text-center pt-3">Au Club UCA, nous offrons à nos membres la
                                possibilité de faire
                                entrer des invités pour profiter de notre ambiance exclusive. Nous comprenons que vous
                                souhaitez partager les plaisirs et les avantages de notre club avec vos proches, vos
                                amis ou vos collègues.
                            </p>
                            <p className="parag-cotis text-center pt-3">
                                En tant que membre du Club UCA, vous avez la faculté de faire entrer des invités, mais
                                il est important de noter que leurs privilèges et leurs accès peuvent différer des
                                vôtres en tant que membre à part entière. Cela garantit une expérience optimale pour nos
                                membres tout en permettant à leurs invités de découvrir partiellement l'atmosphère
                                unique de notre club.
                            </p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Info;

