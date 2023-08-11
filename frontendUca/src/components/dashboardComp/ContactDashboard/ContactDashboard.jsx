import React, { useState, useEffect } from 'react';
import './contactDashboard.css';
import { getAllContact, deleteContact } from '../../../services/ContactService';
import EmailIcon from '@mui/icons-material/Email';
import Modal from '@mui/material/Modal';
import Swal from 'sweetalert2';
import { createResponse } from "../../../services/ResponseService";

export const ContactDashboard = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [responseContent, setResponseContent] = useState('');
    const [selectedContactId, setSelectedContactId] = useState(null);

    const fetchContacts = async () => {
        try {
            const response = await getAllContact();
            console.log(response);
            setContacts(response.contacts);
        } catch (error) {
            console.error('Erreur lors de la récupération des contacts:', error);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleOpenModal = (contact) => {
        setSelectedContact(contact);
        setSelectedContactId(contact.id);
        setShowEditModal(true);
    };

    const handleCloseModal = () => {
        setSelectedContact(null);
        setSelectedContactId(null);
        setShowEditModal(false);
    };

    const handleSendEmail = async () => {
        try {
            const response = await createResponse(selectedContactId, responseContent);

            if (response) {
                // Show success message using Swal
                Swal.fire('Email Sent!', 'Your email has been sent successfully.', 'success');

                // Delete the contact from the list
                setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== selectedContactId));

                // Reset the response content and close the modal
                setResponseContent('');
                handleCloseModal();
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            // Show error message using Swal
            Swal.fire('Error', 'Failed to send email. Please try again later.', 'error');
        }
    };

    return (
        <div className="pt-5">
            <div className="contact-table-container">
                <h2 className="header-contact">Contact</h2>
                <table className="table table-contact mt-4">
                    <thead>
                    <tr>
                        <th className="table-header-contact">Nom</th>
                        <th className="table-header-contact">Prenom</th>
                        <th className="table-header-contact">Telephone</th>
                        <th className="table-header-contact">Email</th>
                        <th className="table-header-contact">Question</th>
                        <th className="table-header-contact">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(contacts) &&
                        contacts.slice().reverse().map((contact) => {
                            return (
                                <tr key={contact.id}>
                                    <td className="td-contact">{contact.nom}</td>
                                    <td className="td-contact">{contact.prenom}</td>
                                    <td className="td-contact">{contact.numeroTelephone}</td>
                                    <td className="td-contact">{contact.email}</td>
                                    <td className="td-contact">{contact.question}</td>
                                    <td className="td-contact">
                                        <button
                                            className="btn-table-response"
                                            onClick={() => handleOpenModal(contact)}
                                        >
                                            <EmailIcon style={{ color: 'darkred' }} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Modal
                open={showEditModal}
                onClose={handleCloseModal}
                className="modal-contact"
            >
                <div className="modal-content-contact">
                    {selectedContact && (
                        <>
                            <h2 className="header-response mt-4">
                                Send Email to {selectedContact.nom} {selectedContact.prenom}
                            </h2>
                            <p className="parag-response pt-3">Email: {selectedContact.email}</p>
                            <textarea
                                className="textarea-contact pt-3"
                                rows={5}
                                cols={40}
                                value={responseContent}
                                onChange={(e) => setResponseContent(e.target.value)}
                            />
                            <div className="modal-button-response">
                                <button className="btn btn-modal-mail my-3" onClick={handleSendEmail}>
                                    Envoyer
                                </button>
                                <button className="btn btn-modal-close mx-3 my-3" onClick={handleCloseModal}>
                                    Close
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </Modal>
        </div>
    );
};
