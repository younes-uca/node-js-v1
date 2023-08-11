const db = require('../models');

const createLogement = async (req, res) => {
    try {
        const { nom, prix, disponibilite, description, capacite, image, nombreLogement } = req.body;
        const existingLogement = await db.Logement.findOne({ where: { nom } });
        if (existingLogement) {
            return res.status(400).json({ message: 'Le nom du logement existe déjà' });
        }
        const logement = await db.Logement.create({
            nom,
            prix,
            disponibilite,
            description,
            capacite,
            image,
            nombreLogement
        });

        res.status(201).json({ logement });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllLogements = async (req, res) => {
    try {
        const logements = await db.Logement.findAll();
        res.status(200).json({ logements: logements });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createLogement,
    getAllLogements
};
