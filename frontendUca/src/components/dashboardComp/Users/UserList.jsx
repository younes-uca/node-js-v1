import React, { useEffect, useState } from 'react';
import './userList.css';
import MaterialTable from 'material-table';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Modal from 'react-modal';
import { getAllUsers } from '../../../services/UserService';
import jsPDF from 'jspdf';

Modal.setAppElement('#root');

export default function UserList() {
    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllUsers();
                setData(response);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const columns = [
        { title: 'Numero', field: 'numero' },
        { title: 'First Password', field: 'firstPassword' },
        { title: 'New Password', field: 'newPassword' },
        {
            title: 'PDF',
            render: (rowData) => (
                <PictureAsPdfIcon
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => handlePdfButtonClick(rowData)}
                />
            ),
        },
    ];

    const handlePdfButtonClick = (rowData) => {
        setSelectedUser(rowData);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
        setIsModalOpen(false);
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(50);
        doc.setTextColor('#CFA486');
        doc.text('ClubUca', 60, 60);
        doc.setFontSize(30);
        doc.setTextColor('#9F470E');
        doc.text('Compte Adherent', 55, 80);
        doc.setFontSize(20);
        doc.setTextColor('#000000');
        doc.text(`Numero: ${selectedUser.numero}`, 65, 100);
        doc.text(`First Password: ${selectedUser.firstPassword}`, 65, 120);
        doc.save('compte_adherent.pdf');
    };

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const filteredData = data.filter((item) =>
        String(item.numero).toLowerCase().includes(searchText.toLowerCase())
    );


    return (
        <div className="user-list-container pt-5">
            <MaterialTable
                title={<h2 className="user-list-title fw-bold">Liste des Comptes</h2>}
                columns={columns}
                data={filteredData}
                options={{
                    actionsColumnIndex: -1,
                    addRowPosition: 'first',
                    search: true,
                    searchFieldAlignment: 'right',
                    searchText: searchText,
                    toolbarButtonAlignment: 'left',
                    cellStyle: {
                        fontFamily: 'Arial',
                        fontSize: '14px',
                    },
                }}
                components={{
                    Container: (props) => (
                        <div
                            className="table-container"
                            style={{
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                                borderRadius: '10px',
                                padding: '20px',
                                marginBottom: '20px',
                            }}
                        >
                            {props.children}
                        </div>
                    ),
                }}
            />

            {selectedUser && (
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleCloseModal}
                    className="custom-modal"
                    overlayClassName="modal-overlay"
                >
                    <div className="modal-content">
                        <h1 className="header-modal">
                            Club<sub className="span-modal">Uca</sub>
                        </h1>
                        <h2 style={{ color: '#CFA486' }} className="pt-3">
                            Compte Adherent
                        </h2>
                        <div className="user-info">
                            <p>Numero: {selectedUser.numero}</p>
                            <p>First Password: {selectedUser.firstPassword}</p>
                        </div>
                        <button className="pdf-button" onClick={generatePDF}>
                            PDF
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
}
