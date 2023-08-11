const db = require('../models');
const { Op } = require('sequelize');
const { Reservation,Logement,Adherent } = require('../models');

const createReservation = async (req, res) => {
    console.log(req.body);
    try {
        const { dateArrive, dateDepart, nomLogement, nombrePersonne, numeroAdherent } = req.body;

        const logement = await db.Logement.findOne({
            where: { nom: nomLogement },
        });

        if (!logement) {
            return res.status(404).json({ message: 'Logement non trouvé' });
        }

        const adherent = await db.Adherent.findOne({
            where: { numero: numeroAdherent },
        });

        if (!adherent) {
            return res.status(404).json({ message: 'Adhérent non trouvé' });
        }
        if (new Date(dateDepart) <= new Date(dateArrive)) {
            return res.status(400).json({ message: 'La date de départ doit être supérieure à la date d\'arrivée' });
        }

        const existingReservations = await db.Reservation.findAll({
            where: {
                logementId: logement.id,
                [Op.or]: [
                    {
                        dateArrive: { [Op.between]: [dateArrive, dateDepart] },
                    },
                    {
                        dateDepart: { [Op.between]: [dateArrive, dateDepart] },
                    },
                    {
                        [Op.and]: [
                            { dateArrive: { [Op.lte]: dateArrive } },
                            { dateDepart: { [Op.gte]: dateDepart } },
                        ],
                    },
                ],
            },
        });

        if (existingReservations.length >= logement.nombreLogement) {
            return res.status(400).json({ message: 'Tous les logements sont réservés pour cette période' });
        }

        // Créer la réservation
        const reservation = await db.Reservation.create({
            dateArrive,
            dateDepart,
            nombrePersonne,
            numeroAdherent,
            nomLogement,
        });

        await reservation.setLogement(logement);
        await reservation.setAdherent(adherent);

        res.status(201).json({ reservation });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createReservationAdherent = async (req, res) => {
    console.log(req.body);
    try {
        const { dateArrive, dateDepart, nomLogement, nombrePersonne, numeroAdherent } = req.body;

        const logement = await db.Logement.findOne({
            where: { nom: nomLogement },
        });

        if (!logement) {
            return res.status(404).json({ message: 'Logement non trouvé' });
        }

        const adherent = await db.Adherent.findOne({
            where: { numero: numeroAdherent },
        });

        if (!adherent) {
            return res.status(404).json({ message: 'Adhérent non trouvé' });
        }
        if (new Date(dateDepart) <= new Date(dateArrive)) {
            return res.status(400).json({ message: 'La date de départ doit être supérieure à la date d\'arrivée' });
        }

        const existingReservations = await db.Reservation.findAll({
            where: {
                logementId: logement.id,
                [Op.or]: [
                    {
                        dateArrive: { [Op.between]: [dateArrive, dateDepart] },
                    },
                    {
                        dateDepart: { [Op.between]: [dateArrive, dateDepart] },
                    },
                    {
                        [Op.and]: [
                            { dateArrive: { [Op.lte]: dateArrive } },
                            { dateDepart: { [Op.gte]: dateDepart } },
                        ],
                    },
                ],
            },
        });

        if (existingReservations.length >= logement.nombreLogement) {
            return res.status(400).json({ message: 'Tous les logements sont réservés pour cette période' });
        }

        // Créer la réservation
        const reservation = await db.Reservation.create({
            dateArrive,
            dateDepart,
            nombrePersonne,
            numeroAdherent,
            nomLogement,
        });

        await reservation.setLogement(logement);
        await reservation.setAdherent(adherent);

        res.status(201).json({ reservation });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const updateReservation = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const { dateArrive, dateDepart,status, nomLogement, nombrePersonne } = req.body;

        const existingReservation = await db.Reservation.findByPk(id);

        if (!existingReservation) {
            return res.status(404).json({ message: 'Réservation non trouvée' });
        }

        const logement = await db.Logement.findOne({
            where: { nom: nomLogement },
        });
        if (!logement) {
            return res.status(404).json({ message: 'Logement non trouvé' });
        }

        const existingReservations = await db.Reservation.findAll({
            where: {
                logementId: logement.id,
                [Op.or]: [
                    {
                        dateArrive: { [Op.between]: [dateArrive, dateDepart] },
                    },
                    {
                        dateDepart: { [Op.between]: [dateArrive, dateDepart] },
                    },
                    {
                        [Op.and]: [
                            { dateArrive: { [Op.lte]: dateArrive } },
                            { dateDepart: { [Op.gte]: dateDepart } },
                        ],
                    },
                ],
            },
        });

        if (existingReservations.length >= logement.nombreLogement) {
            return res.status(400).json({ message: 'Tous les logements sont réservés pour cette période' });
        }

        await existingReservation.update({
            dateArrive,
            dateDepart,
            nombrePersonne,
            status,
            nomLogement,
        });
        await existingReservation.setLogement(logement);

        res.status(200).json({ reservation: existingReservation });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllReservations = (req, res) => {
    Reservation.findAll({
        include: [{ model: Adherent }, { model: Logement }],
        order: [['createdAt', 'DESC']] // Tri par ordre décroissant de la date de création
    })
        .then((reservations) => {
            if (reservations.length > 0) {
                // Les réservations ont été trouvées
                res.status(200).json(reservations);
            } else {
                // Aucune réservation n'a été trouvée
                res.status(404).json({ message: 'Aucune réservation n\'a été trouvée' });
            }
        })
        .catch((err) => {
            // Une erreur s'est produite
            res.status(500).json({ error: err.message });
        });
};


const getReservationById = async (req, res) => {
    const { id } = req.params;

    try {
        const reservation = await db.Reservation.findByPk(id, { include: [db.Logement] });

        if (!reservation) {
            return res.status(404).json({ message: 'Réservation non trouvée' });
        }

        res.json({ reservation });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const deleteReservation = async (req, res) => {
    const { id } = req.params;
    try {
        const existingReservation = await db.Reservation.findByPk(id);

        if (!existingReservation) {
            return res.status(404).json({ message: 'Réservation non trouvée' });
        }

        await existingReservation.destroy();

        res.status(200).json({ message: 'Réservation supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getDatesLogementsRemplis = async (req, res) => {
    const { logementId } = req.params;

    try {
        const logement = await db.Logement.findByPk(logementId);

        if (!logement) {
            return res.status(404).json({ message: 'Logement non trouvé' });
        }

        const existingReservations = await db.Reservation.findAll({
            where: {
                logementId,
            },
        });

        const logementDates = existingReservations.reduce((acc, reservation) => {
            const { dateArrive, dateDepart } = reservation;
            if (!acc[dateArrive]) {
                acc[dateArrive] = 0;
            }
            if (!acc[dateDepart]) {
                acc[dateDepart] = 0;
            }
            acc[dateArrive]++;
            acc[dateDepart]--;
            return acc;
        }, {});

        let logementsRemplis = [];
        let count = 0;
        let startDate = null;
        Object.entries(logementDates).forEach(([date, numReservations]) => {
            count += numReservations;
            if (count >= logement.nombreLogement && startDate === null) {
                startDate = date;
            } else if (count < logement.nombreLogement && startDate !== null) {
                logementsRemplis.push({ dateArrive: startDate, dateDepart: date });
                startDate = null;
            }
        });

        return res.status(200).json(logementsRemplis);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};















module.exports = {
    createReservation,
    createReservationAdherent,
    getAllReservations,
    getReservationById,
    updateReservation,
    deleteReservation,
    getDatesLogementsRemplis
};
