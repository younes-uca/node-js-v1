const db = require('../models');

// Créer une actualité
const createActualite = async (req, res) => {
    try {
        const { title, content } = req.body;

        // Récupérer l'actualité précédente
        const previousActualite = await db.Actualite.findOne();

        if (previousActualite) {
            // Supprimer l'actualité précédente
            await previousActualite.destroy();
        }

        // Créer la nouvelle actualité
        const actualite = await db.Actualite.create({ title, content });

        res.status(201).json({ actualite });
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};



// Obtenir toutes les actualités avec les adhérents associés
const getAllActualites = async (req, res) => {
    try {
        const actualites = await db.Actualite.findAll();

        res.status(200).json({ actualites });
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des actualités.' });
    }
};

// Obtenir une actualité par son ID avec les adhérents associés
const getActualiteById = async (req, res) => {
    const { id } = req.params;

    try {
        const actualite = await db.Actualite.findByPk(id);

        if (actualite) {
            res.status(200).json({ actualite });
        } else {
            res.status(404).json({ error: 'Actualité non trouvée.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de l\'actualité.' });
    }
};

// Mettre à jour une actualité
const updateActualite = async (req, res) => {
    const { id } = req.params;

    try {
        const [updatedRows] = await db.Actualite.update(req.body, { where: { id } });

        if (updatedRows) {
            res.status(200).json({ message: 'Actualité mise à jour avec succès.' });
        } else {
            res.status(404).json({ error: 'Actualité non trouvée.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de l\'actualité.' });
    }
};

// Supprimer une actualité
const deleteActualite = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedRows = await db.Actualite.destroy({ where: { id } });

        if (deletedRows) {
            res.status(200).json({ message: 'Actualité supprimée avec succès.' });
        } else {
            res.status(404).json({ error: 'Actualité non trouvée.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la suppression de l\'actualité.' });
    }
};

module.exports = {
    createActualite,
    getAllActualites,
    getActualiteById,
    updateActualite,
    deleteActualite
};
