import './contact.css';
import React, { useState } from "react";
import { useNavigate } from "react-router";
import * as ContactService from "../../../services/ContactService";
import Swal from 'sweetalert2';

function Contact() {
    const navigate = useNavigate();
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [numeroTelephone, setNumeroTelephone] = useState('');
    const [question, setQuestion] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault();

        // Appeler la méthode createContact du service ContactService
        ContactService.createContact({ nom, prenom, email, numeroTelephone, question })
            .then(response => {
                // Afficher une alerte de succès avec SweetAlert2
                Swal.fire({
                    icon: 'success',
                    title: 'Message envoyé',
                    text: 'Votre message a été envoyé avec succès.',
                });

                // Réinitialiser les valeurs des champs du formulaire
                setNom('');
                setPrenom('');
                setEmail('');
                setNumeroTelephone('');
                setQuestion('');
            })
            .catch(error => {
                // Afficher une alerte d'erreur avec SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer plus tard.',
                });
                console.error(error);
            });
    }

    return (
        <>
            <section className="sctContact" id="section-wrapper">
                <div className="box-wrapper">
                    <div className="info-wrap">
                        <h2 className="info-title">Contact Information</h2>
                        <h3 className="info-sub-title">Remplissez le formulaire et notre équipe vous répondra dans les 24 heures</h3>
                        <ul className="info-details">
                            <li className="liCnt">
                                <i className="fas fa-phone-alt iCnt" />
                                <span>Phone:</span> <a className="aCnt" href="tel:+212 623 51 26 98">+212 623 51 26 98</a>
                            </li>
                            <li className="liCnt">
                                <i className="fas fa-paper-plane iCnt" />
                                <span>Email:</span> <a className="aCnt" href="mailto:club.uca@gmail.com">club.uca@gmail.com</a>
                            </li>
                            <li className="liCnt">
                                <i className="fas fa-globe iCnt" />
                                <span>Website:</span> <a className="aCnt" onClick={() => { navigate("/") }}>clubUca.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="form-wrap">
                        <form action="src/components/Site/Contact#" method="POST" onSubmit={handleFormSubmit}>
                            <h2 className="form-title">Envoyez-nous un message</h2>
                            <div className="form-fields">
                                <div className="form-group formCnt">
                                    <input type="text" className="fname" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                                </div>
                                <div className="form-group formCnt">
                                    <input type="text" className="lname" placeholder="Prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                                </div>
                                <div className="form-group formCnt">
                                    <input type="email" className="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group formCnt">
                                    <input type="text" className="phone" placeholder="Telephone" value={numeroTelephone} onChange={(e) => setNumeroTelephone(e.target.value)} />
                                </div>
                                <div className="form-group formCnt">
                                    <textarea className="textCnt" name="message" placeholder="Ecrire votre message" value={question} onChange={(e) => setQuestion(e.target.value)} />
                                </div>
                            </div>

                            <input type="submit" defaultValue="Send Message" className="submit-button" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Contact;
