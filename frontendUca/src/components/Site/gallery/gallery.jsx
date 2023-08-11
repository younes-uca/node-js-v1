import './gallery.css';
import bungalow2 from "../../../images/bungalow2.jpg";
import c3 from "../../../images/ftour.jpg";
import nature3 from "../../../images/nature3.jpg";
import tennis from "../../../images/tennis.jpg";
import jeux from "../../../images/jeux.jpg";
import bungalow1 from "../../../images/bungalow1.jpg";
import nature4 from "../../../images/nature4.jpg";
import c7 from "../../../images/tawss1.jpg";
function Gallery() {
    return (

<div id="gallery" className="gallery_wrapper">
    <div className="container">
        <div className="row">
            <div className="col-sm-12 section-title text-center styleh mt-5 mb-5" data-aos="fade-left">
                <h6 className='texts fw-semibold'>What i can do for you</h6>
                <h3 className="textStyle fw-bold">Notre Gallerie</h3>
            </div>
        </div>
        <div className="row g-0" data-aos="zoom-out-up">
            <div className="col-lg-3 col-md-6 gallery-item">
                <img src={bungalow2} className=" img-fluid w-100 imgGal" alt="..."/>
                <div className="gallery-item-content">

                </div>
            </div>
            <div className="col-lg-3 col-md-6 gallery-item">
                <img src={c3} className=" img-fluid w-100 imgGal" alt="..."/>
                <div className="gallery-item-content">

                </div>
            </div>
            <div className="col-lg-3 col-md-6 gallery-item">
                <img src={nature3} className=" img-fluid w-100 imgGal" alt="..."/>
                <div className="gallery-item-content">

                </div>
            </div>
            <div className="col-lg-3 col-md-6 gallery-item">
                <img src={tennis} className=" img-fluid w-100 imgGal" alt="..."/>
                <div className="gallery-item-content">

                </div>
            </div>
            <div className="col-lg-3 col-md-6 gallery-item">
                <img src={nature4} className=" img-fluid w-100 imgGal" alt="..."/>
                <div className="gallery-item-content">

                </div>
            </div>
            <div className="col-lg-3 col-md-6 gallery-item">
                <img src={bungalow1} className=" img-fluid w-100 imgGal" alt="..."/>
                <div className="gallery-item-content">

                </div>
            </div>
            <div className="col-lg-3 col-md-6 gallery-item">
                <img src={jeux} className=" img-fluid w-100 imgGal" alt="..."/>
                <div className="gallery-item-content">

                </div>
            </div>
            <div className="col-lg-3 col-md-6 gallery-item">
                <img src={c7} className=" img-fluid w-100 imgGal" alt="..."/>
                <div className="gallery-item-content">

                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default Gallery;
