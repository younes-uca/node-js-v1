import React, { useEffect} from "react";
import "./home.css";
import image1 from "../../../images/jeux.jpg";
import bangalow2 from "../../../images/bungalow2.jpg";
import bangalow4 from "../../../images/bangalow4.jpg";
import studio1 from "../../../images/studio1.jpg";
import image2 from "../../../images/tennis.jpg";
import tennis from "../../../images/tennis-ball.png";
import restaurant from "../../../images/restaurant.png";
import restau from "../../../images/piscine2.jpg";
import salle from "../../../images/salle1.jpg";
import conf from "../../../images/conf.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useNavigate} from "react-router";




const Home = () => {

    useEffect(() => {
    const counter = (id, start, end, duration) => {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range));

        const timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, step);

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    };

    counter("count1", 0, 3189, 3000);
    counter("count2", 100, 1141, 3000);
    counter("count3", 0, 400, 3000);
    counter("count4", 0, 200, 3000);

    // Call AOS.init() in the useEffect if needed
    AOS.init();

    // Cleanup the AOS initialization on component unmount if necessary
}, []);

    const navigate = useNavigate();
        return (
            <div className="home">
                <div id="room" className="rooms_wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 section-title text-center styleh mt-5 mb-5" data-aos="fade-up" >
                                <h6 className='texts fw-semibold'>What i can do for you</h6>
                                <h3 className="textStyle fw-bold">Nos meilleurs logements</h3>
                            </div>
                        </div>
                        <div className="row m-0"  data-aos="zoom-in">
                            <div className="col-md-4 mb-4 mb-lg-0">
                                <div className="room-items" >
                                    <img src={bangalow2} className="imgLog img-fluid imgHome1" alt="..."/>
                                    <div className="room-item-wrap">
                                        <div className="room-content text-center">
                                            <h5 className="mb-lg-3 roomText">Nos
                                                Chambres</h5>
                                            <p className="text-white">Une chambre luxueuse et élégamment aménagée,
                                                offrant un cadre paisible
                                                pour se reposer.</p>
                                            <a className="main-btn px-4 py-1 fs-5 mt-3" onClick={()=>{navigate("/reservation")}}>Réserver</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4 mb-lg-0"  data-aos="zoom-in">
                                <div className="room-items">
                                    <img src={bangalow4} className=" img-fluid imgHome1" alt="..."/>
                                    <div className="room-item-wrap">
                                        <div className="room-content text-center">
                                            <h5 className=" mb-lg-3 roomText">Nos
                                                Chambres</h5>
                                            <p className="text-white">Une chambre luxueuse et élégamment aménagée,
                                                offrant un cadre paisible
                                                pour se reposer.</p>
                                            <a className="main-btn px-4 py-1 fs-5 mt-3" onClick={()=>{navigate("/reservation")}}>Réserver</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4 mb-lg-0"  data-aos="zoom-in">
                                <div className="room-items">
                                    <img src={studio1} className=" img-fluid imgHome1" alt="..."/>
                                    <div className="room-item-wrap">
                                        <div className="room-content text-center">
                                            <h5 className=" mb-lg-3 roomText">Nos
                                                Chambres</h5>
                                            <p className="text-white">Une chambre luxueuse et élégamment aménagée,
                                                offrant un cadre paisible
                                                pour se reposer.</p>
                                            <a className="main-btn px-4 py-1 fs-5 mt-3" onClick={()=>{navigate("/reservation")}}>Réserver</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="services" className="services_wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 section-title text-center styleh mt-5 mb-5" data-aos="fade-right">
                                <h6 className='texts fw-semibold'>What i can do for you</h6>
                                <h3 className="textStyle fw-bold">Nos meilleurs Services</h3>
                            </div>
                        </div>
                        <div className="row align-items-center service-item-wrap" data-aos="flip-right">
                            <div className="col-lg-7 p-lg-0">
                                <div className="tab-content homeTab" id="myTabContent">
                                    <div className="tab-pane active" id="tennis" role="tabpanel"
                                         aria-labelledby="home-tab" tabIndex="0">
                                        <img src={image2} className=" img-fluid heightImg imgHome2" alt="..."/>
                                    </div>
                                    <div className="tab-pane" id="restau" role="tabpanel"
                                         aria-labelledby="messages-tab" tabIndex="0">
                                        <img src={restau} className=" img-fluid heightImg imgHome2" alt="..."/>
                                    </div>
                                    <div className="tab-pane" id="conf" role="tabpanel" aria-labelledby="profile-tab"
                                         tabIndex="0">
                                        <img src={salle} className=" img-fluid heightImg imgHome2" alt="..."/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 position-relative ps-5">
                                <div className="service-menu-area">
                                    <ul className="nav pe-3 Ulservice mt-3">
                                        <li className="listService">
                                            <a data-bs-toggle="tab" href="src/components/Site/Home#tennis"
                                               className="active text-decoration-none serviceStyle">
                                                <span className="service-icon"><img src={tennis} alt=""/></span>
                                                <h5 className="text-service-style">Espaces Sportifs</h5>
                                                <p className="serviceParag"><span>Découvrez notre complexe</span> sportif polyvalent où vous pourrez pratiquer
                                                    le tennis, le football, la natation et le basket-ball.</p>
                                            </a>
                                        </li>
                                        <li className="listService">
                                            <a data-bs-toggle="tab" href="src/components/Site/Home#restau"
                                               className="text-decoration-none serviceStyle">
                                                <span className="service-icon"><img src={restaurant} alt=""/></span>
                                                <h5 className="text-service-style text-decoration-none">Restauration</h5>
                                                <p className="serviceParag"><span>Dégustez une cuisine</span> exquise et raffinée dans notre restaurant, où
                                                    des saveurs délicieuses rencontrent un service attentif.</p>
                                            </a>
                                        </li>
                                        <li className="listService">
                                            <a data-bs-toggle="tab" href="src/components/Site/Home#conf"
                                               className=" text-decoration-none serviceStyle">
                                                <span className="service-icon"><img src={conf} alt=""/></span>
                                                <h5 className="text-service-style">Séminaire</h5>
                                                <p className="serviceParag"><span>Notre salle de séminaire</span> moderne et équipée est l'endroit idéal pour
                                                    vos réunions d'affaires, conférences et formations. Offrant un
                                                    environnement confortable et professionnel.</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="counter mt-5">
                        <div className="container">
                            <div className="row" >
                                <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                                    <h1 className="textHone">
                                        <span id="count1"></span>+
                                    </h1>
                                    <p className="counterParag fw-bold">Clients Satisfaits</p>
                                </div>
                                <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                                    <h1 className="textHone">
                                        <span id="count2"></span>+
                                    </h1>
                                    <p className="counterParag fw-bold">Nombre d'Adhérent</p>
                                </div>
                                <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                                    <h1 className="textHone">
                                        <span id="count3"></span>+
                                    </h1>
                                    <p className="counterParag fw-bold">Activités Passionnantes</p>
                                </div>
                                <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                                    <h1 className="textHone">
                                        <span id="count4"></span>+
                                    </h1>
                                    <p className="counterParag fw-bold">Événements Mémorables</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Home;
