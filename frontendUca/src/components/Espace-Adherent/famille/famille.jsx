import './famille.css';
import React, { useEffect, useState } from "react";
import { getAdherentByNumero } from "../../../services/AdherentService";

function Famille() {
    const [adherentInfo, setAdherentInfo] = useState({
        nom: "",
        prenom: "",
        conjoint: "",
        nbrEnfants: ""
    });

    useEffect(() => {
        const fetchAdherentInfo = async () => {
            try {
                const response = await getAdherentByNumero(adherentInfo);
                setAdherentInfo(response);
            } catch (error) {
                console.error("Erreur lors de la récupération des informations de l'adhérent :", error);
                // Afficher une notification d'erreur ou effectuer d'autres actions nécessaires
            }
        };

        fetchAdherentInfo();
    }, []);

    return (
        <>
            <div className="listeFamille">
                <div className="famille">
                    <h2 className="h2Famille">Liste Bénéficiaires</h2>
                    <table className="tableFml">
                        <thead className="theadFml">
                        <tr className="trFml">
                            <td className="tdFml">Nom Adherent</td>
                            <td className="tdFml">Prenom Adherent</td>
                            <td className="tdFml">Conjoint(e)</td>
                            <td className="tdFml">Nombre d'Enfants</td>
                        </tr>
                        </thead>
                        <tbody className="tbodyFml">
                        <tr className="trFml">
                            <td className="tdFml">{adherentInfo.nom}</td>
                            <td className="tdFml">{adherentInfo.prenom}</td>
                            <td className="tdFml">{adherentInfo.conjoint}</td>
                            <td className="tdFml">{adherentInfo.nbrEnfants}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Famille;
