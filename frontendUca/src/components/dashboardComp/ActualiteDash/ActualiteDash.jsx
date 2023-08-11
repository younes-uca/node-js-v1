import React, { useState, useEffect } from 'react';
import { createActualite, getAllActualite, updateActualite, deleteActualite } from '../../../services/ActualiteService';
import Swal from 'sweetalert2';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "./actualiteDash.css";

export const ActualiteDash = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [actualites, setActualites] = useState([]);
	const [selectedActualite, setSelectedActualite] = useState(null);
	const [showEditModal, setShowEditModal] = useState(false);

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleContentChange = (event) => {
		setContent(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const actualiteData = {
			title,
			content
		};

		try {
			await createActualite(actualiteData);
			console.log('Actualité créée avec succès');
			setTitle('');
			setContent('');
			fetchActualites();
			Swal.fire({
				icon: 'success',
				title: 'Actualité créée',
				text: 'L\'actualité a été créée avec succès.'
			});
		} catch (error) {
			console.error('Erreur lors de la création de l\'actualité:', error);
		}
	};

	const fetchActualites = async () => {
		try {
			const response = await getAllActualite();
			setActualites(response.actualites);
		} catch (error) {
			console.error('Erreur lors de la récupération des actualités:', error);
		}
	};

	useEffect(() => {
		fetchActualites();
	}, []);

	const handleUpdate = async (event) => {
		event.preventDefault();
		const updatedData = {
			title,
			content
		};

		try {
			const response = await updateActualite(selectedActualite.id, updatedData);
			console.log('Actualité mise à jour:', response);
			fetchActualites();
			setShowEditModal(false);
			Swal.fire({
				icon: 'success',
				title: 'Actualité mise à jour',
				text: 'L\'actualité a été mise à jour avec succès.'
			});
		} catch (error) {
			console.error('Erreur lors de la mise à jour de l\'actualité:', error);
		}
	};

	const handleDelete = async (id) => {
		try {
			const result = await Swal.fire({
				icon: 'warning',
				title: 'Êtes-vous sûr(e) ?',
				text: `Vous êtes sur le point de supprimer cette actualité`,
				showCancelButton: true,
				confirmButtonText: 'Supprimer',
				cancelButtonText: 'Annuler',
			});

			if (result.isConfirmed) {
				const response = await deleteActualite(id);
				console.log('Actualité supprimée:', response);
				fetchActualites();
				Swal.fire({
					icon: 'success',
					title: 'Ligne supprimée',
					showConfirmButton: false,
					timer: 1500,
				});
			} else {
				Swal.fire({
					icon: 'info',
					title: 'Suppression annulée',
					showConfirmButton: false,
					timer: 1500,
				});
			}
		} catch (error) {
			console.error('Erreur lors de la suppression de l\'actualité:', error);
			Swal.fire({
				icon: 'error',
				title: 'Erreur',
				text: 'Une erreur s\'est produite lors de la suppression de l\'actualité. Veuillez réessayer.',
			});
		}
	};

	const handleEdit = (actualite) => {
		setSelectedActualite(actualite);
		setTitle(actualite.title);
		setContent(actualite.content);
		setShowEditModal(true);
	};

	const handleClose = () => {
		setSelectedActualite(null);
		setTitle('');
		setContent('');
		setShowEditModal(false);
	};

	return (
		<div className="pt-5">
			<h1 className="pb-4 header-actualite">Notre Actualité</h1>
			<form onSubmit={handleSubmit} className="actualite-form-container">
				<div>
					<label htmlFor="title" className="titre-actualite">Titre :</label>
					<input type="text" id="title" className="input-actualite" value={title} onChange={handleTitleChange} required />
				</div>
				<div className="pt-3">
					<label className="contenu-actualite" htmlFor="content">Contenu :</label>
					<textarea rows="4" className="text-area-actualite" id="content" value={content} onChange={handleContentChange} required />
				</div>
				<button type="submit" className="btn post-btn mt-4">Poster</button>
			</form>

			<div className="actualite-table-container">
				<h2 className="pt-5">Liste des actualités</h2>
				<table className="table table-actualite mt-3">
					<thead>
					<tr>
						<th className="table-header-actualite">Titre</th>
						<th className="table-header-actualite">Contenu</th>
						<th className="table-header-actualite">Action</th>
					</tr>
					</thead>
					<tbody>
					{actualites.slice().reverse().map((actualite) => (
						<tr key={actualite.id}>
							<td className="td-actualite">{actualite.title}</td>
							<td className="td-actualite">{actualite.content}</td>
							<td className="td-actualite">
								<button className="btn-table-edit" onClick={() => handleEdit(actualite)}>
									<EditIcon style={{ color: "blue" }} />
								</button>
								<button className="btn-table-delete" onClick={() => handleDelete(actualite.id)}>
									<DeleteIcon style={{ color: "red" }} />
								</button>
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
			{selectedActualite && (
				<Modal show={showEditModal} onHide={handleClose} centered className="modal-lg modal-dialog-centered">
					<Modal.Header>
						<Modal.Title className="modal-title-actualite" style={{ fontSize: "50px" }}>Modifier l'actualité</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form onSubmit={handleUpdate} className="actualite-modal-form-container">
							<div className="modal-contenu-actualite">
								<label htmlFor="editTitle" className="titre-modal-actualite">Titre :</label>
								<input
									type="text"
									id="editTitle"
									className="input-modal-actualite form-control"
									value={title}
									onChange={handleTitleChange}
									required
								/>
							</div>
							<div className=" modal-contenu-actualite pt-3">
								<label className="contenu-modal-actualite" htmlFor="editContent">Contenu :</label>
								<textarea
									rows="4"
									className="textarea-modal-actualite form-control"
									id="editContent"
									value={content}
									onChange={handleContentChange}
									required
								/>
							</div>
							<div className="modal-buttons">
								<button type="submit" className="btn btn-enregistrer my-3">Enregistrer</button>
								<a className="btn btn-annuler mx-3 my-3" onClick={handleClose}>Annuler</a>
							</div>
						</form>
					</Modal.Body>
				</Modal>
			)}
		</div>
	);
};
