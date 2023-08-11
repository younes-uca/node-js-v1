import React, { useState, useEffect } from 'react';
import './adherentList.css';
import MaterialTable from 'material-table';
import { AddBox, DeleteOutline, Edit } from '@mui/icons-material';
import Swal from 'sweetalert2';
import {
    getAllAdherents,
    createAdherentWithUser,
    deleteAdherentByNumero,
    updateAdherent
} from '../../../services/AdherentService';

export default function AdherentList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllAdherents();
                setData(response);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    const formatDate = (date) => {
        if (date) {
            const formattedDate = new Date(date).toLocaleDateString();
            return formattedDate;
        }
        return '';
    };


    const columns = [
        { title: 'Numero', field: 'numero' },
        { title: 'Nom', field: 'nom' },
        { title: 'Prenom', field: 'prenom' },
        { title: 'Telephone A', field: 'teleA' },
        { title: 'Telephone B', field: 'teleB' },
        { title: 'Email', field: 'email' },
        { title: 'Date de Naissance', field: 'dateNaissance', render: rowData => formatDate(rowData.dateNaissance) },
        { title: 'Date d\'Abonnement', field: 'dateAbonnement', render: rowData => formatDate(rowData.dateAbonnement) },
        { title: 'Date de Cotisation', field: 'dateCotisation', render: rowData => formatDate(rowData.dateCotisation) },
        { title: 'Conjoint', field: 'conjoint' },
        { title: 'Etablissement', field: 'etablissement' },
        { title: 'Etat Matrimonial', field: 'etatMatrimonial' },
        { title: 'Profession', field: 'profession' },
        { title: 'CIN', field: 'cin' },
        { title: 'Nombre d\'Enfants', field: 'nbrEnfants' },
        { title: 'Telephone Fixe', field: 'teleFixe' },
        { title: 'Genre', field: 'genre' },
        { title: 'Adresse', field: 'adresse' }
    ];

    const handleRowAdd = async (newData) => {
        try {
            const response = await createAdherentWithUser(newData);
            const updatedRow = { ...response.adherent };
            const updatedRows = [...data, updatedRow];
            const refreshedData = await getAllAdherents();
            await setData(updatedRows);
            setData(refreshedData);
            Swal.fire({
                icon: 'success',
                title: 'adherent ajouté',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data.message || "An error occurred";
                Swal.fire("Error", errorMessage, "error");
            }else {
                console.log(error);
                Swal.fire("Error", "An error occurred", "error");
            }
        }
    };













    const handleRowDelete = async (selectedRow) => {
        const index = selectedRow.tableData.id;
        const deletedRow = data[index];

        Swal.fire({
            icon: 'warning',
            title: 'Êtes-vous sûr ?',
            text: `Vous êtes sur le point de supprimer l'adhérent du numéro ${deletedRow.numero}.`,
            showCancelButton: true,
            confirmButtonText: 'Supprimer',
            cancelButtonText: 'Annuler',
            confirmButtonColor: '#49d630',
            cancelButtonColor: '#d33',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteAdherentByNumero(deletedRow.numero); // Suppression du backend
                    const updatedRows = data.filter((row) => row.id !== deletedRow.id);
                    setData(updatedRows);
                    Swal.fire({
                        icon: 'success',
                        title: 'Adhérent supprimé',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erreur',
                        text: 'Une erreur est survenue lors de la suppression de l\'adhérent.',
                    });
                }
            }
        });
    };



    const handleRowUpdate = async (updatedRow, oldRow) => {
        try {
            const { id, ...adherentData } = updatedRow;
            const response = await updateAdherent(id, adherentData);
            const updatedRows = [...data];
            updatedRows[oldRow.tableData.id] = response;
            await setData(updatedRows);
            Swal.fire({
                icon: 'success',
                title: 'mise à jour Adherent',
                showConfirmButton: false,
                timer: 1500
            });
            const refreshedData = await getAllAdherents();
            setData(refreshedData);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data.message || "An error occurred";
                Swal.fire("Error", errorMessage, "error");
            } else {
                console.log(error);
                Swal.fire("Error", "An error occurred", "error");
            }
        }
    };







    return (
        <div className="adherent-list-container">
            <MaterialTable
                title={<h2 className="adherent-list-title fw-bold">Liste des Adherents</h2>}
                columns={columns}
                data={data}
                editable={{
                    onRowAdd: handleRowAdd,
                    onRowDelete: handleRowDelete,
                    onRowUpdate: handleRowUpdate
                }}
                icons={{
                    Add: () => <AddBox style={{ color: 'blue' }} />,
                    Edit: () => <Edit style={{ color: 'green' }} />,
                    Delete: () => <DeleteOutline style={{ color: 'red' }} />
                }}
                options={{
                    actionsColumnIndex: -1,
                    addRowPosition: 'first',
                }}
                components={{
                    Container: (props) => (
                        <div
                            className="table-container"
                            style={{
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                                borderRadius: '10px',
                                padding: '20px',
                                marginBottom: '20px'
                            }}
                        >
                            {props.children}
                        </div>
                    )
                }}
            />
        </div>
    );
}
