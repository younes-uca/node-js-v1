import './accueil.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllActualite } from '../../../services/ActualiteService';

function Accueil() {
    const navigate = useNavigate();
    const [actualites, setActualites] = useState([]);

    useEffect(() => {
        const fetchActualites = async () => {
            try {
                const response = await getAllActualite();
                const actualitesData = response.actualites;
                setActualites(actualitesData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchActualites();
    }, []);

    // Trie les actualités par date de manière décroissante
    const sortedActualites = actualites.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Récupère la dernière actualité
    const latestActualite = sortedActualites[0];

    return (
        <>
            <div>
                <div className="cardBox">
                    <div className="card">
                        <div>
                            <div className="iconBx">
                                <span className="fa fa-user"/>
                            </div>
                            <div className="cardName" onClick={() => { navigate("/monProfil") }}>Mon Profil</div>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <div className="iconBx">
                                <span className="fas fa-users"/>
                            </div>
                            <div className="cardName" onClick={() => { navigate("/Famille") }}>Famille</div>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <div className="iconBx">
                                <span className="far fa-calendar-check"/>
                            </div>
                            <div className="cardName" onClick={() => { navigate("/mesReservations") }}>Reservation</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="actualite">
                <div className="divTit">
                    <h2 className="titreAc">Actualités</h2>
                </div>
                <div className="cardBox2">
                    {latestActualite ? (
                        <div className="card2" key={latestActualite.id}>
                            <div>
                                <div className="card-title-actualite mb-2">
                                    <h1>{latestActualite.title}</h1>
                                </div>
                                <div className="cardText mt-2">{latestActualite.content}</div>
                            </div>
                        </div>
                    ) : (
                        <div className="noActualite">No actualites available.</div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Accueil;
