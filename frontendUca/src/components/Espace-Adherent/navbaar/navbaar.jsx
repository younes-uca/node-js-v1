import './navbaar.css';
import React, {useEffect} from "react";
import image1 from '../../../images/th.jpeg';


function Navbaar() {
    useEffect(() => {
        let toggle = document.querySelector('.toggleEs');
        let navigation = document.querySelector('.sideEs');
        let topbarEs = document.querySelector('.topbarEs');

        toggle.onclick = function ()
        {
            topbarEs.classList.toggle('active');
            navigation.classList.toggle('active');
        }
    }, []);

    return (
                <div className="topbarEs fixed-top">
                    <div className="toggleEs">
                        <span className="fa fa-bars barsNavEA"/>
                    </div>
                    <div className="searchEs">
                        <label className="labelNavEa" >
                            <input className="inputNavEa" type="text" placeholder="Search here"/>
                            <span className="fa fa-search searchEa"></span>
                        </label>
                    </div>

                    <div className="userEa">
                        <img className="imgNavEa" src={image1}/>
                    </div>
                </div>
    )
};
export default Navbaar;
