import React, { useState, useEffect } from 'react';
import './reservationList.css';
import MaterialTable from 'material-table';
import { AddBox, DeleteOutline, Edit } from '@mui/icons-material';
import Swal from 'sweetalert2';
import {
    getAllReservations,
    createReservation,
    deleteReservation,
    updateReservation
} from '../../../services/ReservationService';

export default function ReservationList() {
    const [data, setData] = useState([]);
    const [result,setResult] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllReservations();
                const totals = response.map((total)=>({
                    id :total.id,
                    dateArrive:total.dateArrive,
                    dateDepart:total.dateDepart,
                    nombrePersonne:total.nombrePersonne,
                    status:total?.status,
                    numeroAdherent:total.Adherent.numero,
                    nomLogement:total.Logement.nom
                }))
                console.log(totals);
                console.log(response);
                setData(totals);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    const columns = [
        { title: 'dateArrive', field: 'dateArrive', render: (rowData) => formatDate(rowData.dateArrive)  },
        { title: 'dateDepart', field: 'dateDepart' , render: (rowData) => formatDate(rowData.dateDepart) },
        { title: 'nombrePersonne', field: 'nombrePersonne' },
        { title: 'status', field: 'status' },
        { title: "Adherent", field: 'numeroAdherent' },
        { title: 'Logement', field: 'nomLogement' }
    ];
    const filteredData = data.filter((item) =>
        String(item.numeroAdherent).toLowerCase().includes(searchText.toLowerCase())
    );

    const handleRowAdd = async (newData) => {
        try {
            const createdReservation = await createReservation(newData);
            console.log(createdReservation);

            if (createdReservation) {
                const updatedRows = [...data, createdReservation];
                await setData(updatedRows);

                Swal.fire({
                    icon: 'success',
                    title: 'Succès',
                    text: 'Réservation ajoutée avec succès',
                    showConfirmButton: false,
                    timer: 1500,
                });

                const refreshedData = await getAllReservations();
                setData(refreshedData);
            }
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








    const handleRowDelete = async (selectedRow) => {
            const index = selectedRow.tableData.id;
            const deletedRow = data[index];
            Swal.fire({
                icon: 'warning',
                title: 'vous êtes sûr ??',
                text: `vous êtes sur le point de supprimer la réservation de l'adherent du numero ${deletedRow.id}.`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
                cancelButtonText: 'Cancel',
                confirmButtonColor: '#49d630',
                cancelButtonColor: '#d33',
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        await deleteReservation(deletedRow.id);
                        const updatedRows = data.filter((row) => row.id !== deletedRow.id);
                        setData(updatedRows);
                        Swal.fire({
                            icon: 'success',
                            title: 'réservation supprimé',
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
            const { id } = updatedRow;

            await updateReservation(id, updatedRow);

            const updatedRows = [...data];
            updatedRows[oldRow.tableData.id] = updatedRow;
            setData(updatedRows);

            Swal.fire({
                icon: 'success',
                title: 'Row Updated',
                showConfirmButton: false,
                timer: 1500,
            });

             await getAllReservations();
        } catch (error) {
            console.log(error);

            Swal.fire({
                icon: 'error',
                title: 'Update Error',
                text: 'Failed to update the row',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };














    return (
        <div className="reservation-list-container">
            <MaterialTable
                title={<h2 className="reservation-list-title fw-bold">Liste des Reservations</h2>}
                columns={columns}
                data={filteredData}
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
                    search: true,
                    searchText: searchText,

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
