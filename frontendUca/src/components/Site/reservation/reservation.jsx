import React, { useState } from 'react';
import { createReservationAdherent } from '../../../services/ReservationService';
import './reservation.css';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

function Reservation() {
    const [formData, setFormData] = useState({
        dateArrivee: '',
        dateDepart: '',
        nomLogement: '',
        nombrePersonne: ''
    });

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const reservationData = {
                dateArrive: formData.dateArrivee,
                dateDepart: formData.dateDepart,
                nomLogement: formData.nomLogement,
                nombrePersonne: parseInt(formData.nombrePersonne, 10)
            };

            await createReservationAdherent(reservationData);
            // Réinitialiser le formulaire après la soumission réussie
            setFormData({
                dateArrivee: '',
                dateDepart: '',
                nomLogement: '',
                nombrePersonne: ''
            });
            toast.success("Reservation passée avec succès!");
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data.message || "An error occurred";
                Swal.fire("Désolé", errorMessage, "error");
            }
            else if(error.response && error.response.status === 404){
                const errorMessage = error.response.data.message || "An error occurred";
                Swal.fire("Désolé", errorMessage, "error");
            } else {
                console.log(error);
                Swal.fire("Error", "An error occurred", "error");
            }
        }
    };

    return (
        <div id="booking" className="sct">
            <div className="sct-center">
                <div className="container">
                    <div className="roww">
                        <div className="booking-form">
                            <div className="form-header">
                                <h1 className="titre text-light">Effectuez votre réservation</h1>
                            </div>
                            <form onSubmit={handleSubmit} key={formData.id}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <span className="form-label">Logement</span>
                                            <select
                                                className="form-control"
                                                name="nomLogement"
                                                value={formData.nomLogement}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Sélectionner un logement</option>
                                                <option value="chambre">Chambre</option>
                                                <option value="studio">Studio</option>
                                                <option value="bungalow">Bungalow</option>
                                                <option value="riad">Riad</option>
                                            </select>
                                            <span className="select-arrow" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <span className="form-label">Nombre de Personne</span>
                                            <select
                                                className="form-control"
                                                name="nombrePersonne"
                                                value={formData.nombrePersonne}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Sélectionner le nombre de personnes</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                            <span className="select-arrow" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <span className="form-label">Date d'arrivée</span>
                                            <input
                                                className="form-control"
                                                type="date"
                                                name="dateArrivee"
                                                value={formData.dateArrivee}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <span className="in-out hidden-xs hidden-sm">⇌</span>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <span className="form-label">Date de départ</span>
                                            <input
                                                className="form-control"
                                                type="date"
                                                name="dateDepart"
                                                value={formData.dateDepart}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-btn">
                                            <button className="submit-btn" type="submit">
                                                Passer Reservation
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Reservation;
