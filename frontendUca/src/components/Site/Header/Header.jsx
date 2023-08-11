import React from "react";
import "./header.css";
import piscine2 from "../../../images/piscine5.jpg";
import header1 from "../../../images/header1.jpg";
import header2 from "../../../images/header2.jpg";
import {useNavigate} from "react-router";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner c-item">
                <div className="carousel-item active">
                    <img src={piscine2} className="d-block w-100 c-img imgHead" alt="..." />
                    <div className="carousel-caption headerCaption top-0 mt-5 d-none d-md-block">
                        <div className="row rowLog">
                            <div className="col-md-6 logCol mt-5 animate__animated animate__flip">
                                <h1 className="mt-5 text-uppercase fw-bolder fontfam">Welcome to <span className="spanTitle">Club Uca</span></h1>
                                <p className="fs-4">Offre un séjour pratique et confortable aux membres du personnel et aux enseignants de l'université.</p>
                                <a className="btn btn-primary headBtn px-4 py-2 fs-5 mt-3" onClick={()=>{navigate("/information")}}>Plus d'informations</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={header1} className="d-block w-100 c-img imgHead2" alt="..." />
                    <div className="carousel-caption headerCaption top-0 mt-5 d-none d-md-block">
                        <div className="row rowLog">
                            <div className="col-md-6 logCol mt-5 animate__animated animate__flip">
                                <h1 className="mt-5 text-uppercase fw-bolder fontfam">Welcome to <span className="spanTitle">Club Uca</span></h1>
                                <p className="fs-4">Offre un séjour pratique et confortable aux membres du personnel et aux enseignants de l'université.</p>
                                <a className="btn btn-primary headBtn px-4 py-2 fs-5 mt-3" onClick={()=>{navigate("/information")}}>Plus d'informations</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={header2} className="d-block w-100 c-img" alt="..." />
                    <div className="carousel-caption headerCaption top-0 mt-5 d-none d-md-block">
                        <div className="row rowLog">
                            <div className="col-md-6 logCol mt-5 animate__animated animate__flip">
                                <h1 className="mt-5 text-uppercase fw-bolder fontfam">Welcome to <span className="spanTitle">Club Uca</span></h1>
                                <p className="fs-4">Offre un séjour pratique et confortable aux membres du personnel et aux enseignants de l'université.</p>
                                <a className="btn btn-primary headBtn px-4 py-2 fs-5 mt-3" onClick={()=>{navigate("/information")}}>Plus d'informations</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Header;
