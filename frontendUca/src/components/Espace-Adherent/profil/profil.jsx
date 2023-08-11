import './profil.css';
import React, { useEffect, useState } from "react";
import { getAdherentByNumero, updateAdherent } from "../../../services/AdherentService";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Profil() {
    const [adherentInfo, setAdherentInfo] = useState({
        numero: "",
        nom: "",
        prenom: "",
        email: "",
        teleA: "",
        teleB: "",
        dateNaissance: "",
        dateAbonnement: "",
        dateCotisation: "",
        etablissement: "",
        etatMatrimonial: "",
        profession: "",
        cin: "",
        genre: "",
        adresse: ""
    });

    useEffect(() => {
        const fetchAdherentInfo = async () => {
            try {
                const response = await getAdherentByNumero(adherentInfo);
                const { dateNaissance, dateAbonnement, dateCotisation, ...rest } = response;

                setAdherentInfo((prevData) => ({
                    ...prevData,
                    dateNaissance: dateNaissance ? dateNaissance.substring(0, 10) : '',
                    dateAbonnement: dateAbonnement ? dateAbonnement.substring(0, 10) : '',
                    dateCotisation: dateCotisation ? dateCotisation.substring(0, 10) : '',
                    ...rest
                }));
            } catch (error) {
                console.error("Erreur lors de la récupération des informations de l'adhérent :", error);
                // Afficher une notification d'erreur ou effectuer d'autres actions nécessaires
            }
        };

        fetchAdherentInfo();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAdherentInfo((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateAdherent(adherentInfo);

            setSuccessAlert(true);
            toast.success("Les informations ont été mises à jour avec succès!");
        } catch (error) {
            console.error("Erreur lors de la mise à jour des données de l'adhérent :", error);
            // Afficher une notification d'erreur ou effectuer d'autres actions nécessaires
        }
    };

    const [successAlert, setSuccessAlert] = useState(false);

    return (
        <>
            <div className="bodyPrf">
                <div className="containerPrf">
                    <h2 className="headPrf">Mes Données</h2>
                    <form className="formPrf" onSubmit={handleSubmit}>
                        <div className="form1 first">
                            <div className="fieldsPrf">
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">Numéro</label>
                                    <input className="inputPrf" type="text" placeholder="" name="numero"
                                           value={adherentInfo.numero} readOnly />
                                </div>
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">Nom</label>
                                    <input className="inputPrf" type="text" placeholder="Entrer votre nom" name="nom"
                                           value={adherentInfo.nom}
                                           onChange={handleChange} />
                                </div>
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">Prénom</label>
                                    <input className="inputPrf" type="text" placeholder="Entrer votre prénom" name="prenom"
                                           value={adherentInfo.prenom}
                                           onChange={handleChange} />
                                </div>
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">Email</label>
                                    <input className="inputPrf" type="email" placeholder="Entrer votre email" name="email"
                                           value={adherentInfo.email}
                                           onChange={handleChange} />
                                </div>
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">teleA</label>
                                    <input className="inputPrf" type="tel" placeholder="Entrer votre premier telephone" name="teleA"
                                           value={adherentInfo.teleA}
                                           onChange={handleChange} />
                                </div>
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">teleB</label>
                                    <input className="inputPrf" type="tel" placeholder="Entrer votre deuxieme telephone" name="teleB"
                                           value={adherentInfo.teleB}
                                           onChange={handleChange} />
                                </div>
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">Date de Naissance</label>
                                    <input className="inputPrf" type="text" placeholder="" name="dateNaissance"
                                           value={adherentInfo.dateNaissance} readOnly />
                                </div>
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">Date d'Abonnement</label>
                                    <input className="inputPrf" type="text" placeholder="" name="dateAbonnement"
                                           value={adherentInfo.dateAbonnement} readOnly />
                                </div>
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">Date de Cotisation</label>
                                    <input className="inputPrf" type="text" placeholder="" name="dateCotisation"
                                           value={adherentInfo.dateCotisation} readOnly />
                                </div>
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">Etablissement</label>
                                    <input className="inputPrf" type="text" placeholder="Entrer votre etablissement" name="etablissement"
                                           value={adherentInfo.etablissement}
                                           onChange={handleChange} />
                                </div>
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">Etat Matrimonial</label>
                                    <input className="inputPrf" type="text" placeholder="Entrer votre etat matrimonial" name="etatMatrimonial"
                                           value={adherentInfo.etatMatrimonial}
                                           onChange={handleChange} />
                                </div>
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">Profession</label>
                                    <input className="inputPrf" type="text" placeholder="Entrer votre profession" name="profession"
                                           value={adherentInfo.profession}
                                           onChange={handleChange} />
                                </div>
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">Cin</label>
                                    <input className="inputPrf" type="text" placeholder="Entrer votre cin" name="cin"
                                           value={adherentInfo.cin}
                                           onChange={handleChange} />
                                </div>
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">Genre</label>
                                    <input className="inputPrf" type="text" placeholder="Entrer votre genre" name="genre"
                                           value={adherentInfo.genre}
                                           onChange={handleChange} />
                                </div>
                                <div className="inputs-fieldPrf">
                                    <label className="labelPrf">Adresse</label>
                                    <input className="inputPrf" type="text" placeholder="Entrer votre adresse" name="adresse"
                                           value={adherentInfo.adresse}
                                           onChange={handleChange} />
                                </div>
                            </div>
                            <div className="btnPrfContainer">
                                <button type="submit" className="btnPrf px-4 py-2 fs-5 mt-2">Enregistrer</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {successAlert && (
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover

                />
            )}
        </>
    );
}

export default Profil;
