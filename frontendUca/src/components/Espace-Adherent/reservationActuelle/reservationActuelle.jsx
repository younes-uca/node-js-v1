import './reservationActuelle.css';
import React, { useEffect, useState } from "react";
import { getReservationsByAdherent } from '../../../services/AdherentService';

function ReservationActuelle() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const adherentInfo = {}; // Ajoutez les détails de l'adhérent ici si nécessaire
                const response = await getReservationsByAdherent(adherentInfo);
                setReservations(response.reservations); // Utilisez response.reservations pour mettre à jour l'état
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    // Fonction pour formater une date au format "DD/MM/YYYY"
    const formatDate = (date) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };


    return (
        <>
            <div className="listeFamille">
                <div className="reservationAct">
                    <h2 className="h2Famille">Réservation Actuelle</h2>
                    <table className="tableFml">
                        <thead className="theadFml">
                        <tr className="trFml">
                            <td className="tdFml">Date Arrivée</td>
                            <td className="tdFml">Date Départ</td>
                            <td className="tdFml">Nombre de Personnes</td>
                            <td className="tdFml">Logement</td>
                            <td className="tdFml">Statut</td>
                        </tr>
                        </thead>
                        <tbody className="tbodyFml">
                        {Array.isArray(reservations) && reservations.map(reservation => (
                            <tr className="trFml" key={reservation.id}>
                                <td className="tdFml">{formatDate(reservation.dateArrive)}</td>
                                <td className="tdFml">{formatDate(reservation.dateDepart)}</td>
                                <td className="tdFml">{reservation.nombrePersonne}</td>
                                <td className="tdFml">{reservation.Logement.nom}</td> {/* Utilisez la propriété appropriée pour le nom du logement */}
                                <td className="tdFml">{reservation.status}</td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
}

export default ReservationActuelle;
