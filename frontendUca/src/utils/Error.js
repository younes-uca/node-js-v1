import React from 'react';
import '../error.css';
import {useNavigate} from "react-router";


const Error = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1 className="h1Error">404</h1>
                    </div>
                    <h2 className="h2Error">We are sorry, Page not found!</h2>
                    <p className="pError">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <a href="#" className="aError" onClick={()=>{navigate("/accueil")}}>Back To Homepage</a>
                </div>
            </div>
        </div>
    );
};

export default Error;
