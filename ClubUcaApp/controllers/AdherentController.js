const generatePassword = require('generate-password');
const { Adherent, User, Role, Reservation, Logement } = require('../models');

const createAdherentWithUser = async (req, res) => {
    try {
        // Vérifier si l'Adherent existe déjà
        const existingAdherent = await Adherent.findOne({
            where: { numero: req.body.numero },
        });
        if (existingAdherent) {
            return res.status(400).json({ message: 'Cet Adherent existe déjà' });
        }

        // Créer le nouvel Adherent
        const adherent = await Adherent.create(req.body);

        // Générer un mot de passe aléatoire pour le compte User associé
        const firstPassword = generatePassword.generate();
        let newPassword = firstPassword;

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        newPassword = hashedPassword;
        // Créer le nouveau compte User associé à l'Adherent
        const user = await User.create({
            numero: req.body.numero,
            firstPassword,
            newPassword
        });

        const adherentRole = await  Role.findOne({where: { nom: 'adherent'}});

        await user.setRole(adherentRole);
        await adherent.setUser(user);
        // Envoyer le mot de passe par e-mail à l'adresse de l'Adherent (s'il y en a une)
        // ...

        return res.status(201).json({ adherent, user, firstPassword });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erreur serveur' });
    }
};

const getReservationsByAdherent = async (req, res) => {
    const { numero } = req.params;

    try {
        const adherent = await db.Adherent.findOne({
            where: { numero },
            include: [
                {
                    model: Reservation,
                    include: [Logement],
                    where: {
                        dateArrive: {
                            [db.Sequelize.Op.gte]: new Date() // Date d'arrivée supérieure ou égale à la date actuelle
                        }
                    }
                }
            ]
        });

        if (!adherent || !adherent.Reservations.length) {
            return res.status(404).json({ message: 'Aucune réservation trouvée pour cet adhérent' });
        }

        const reservations = adherent.Reservations.filter(reservation => new Date() <= reservation.dateArrive);
        res.json({ reservations });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



//deleteAll adherents with users
const deleteAll = (req, res) => {
    Adherent.destroy({
        where: {},
        truncate: false
    })
    User.destroy({
        where: {},
        truncate: false
    })
        .then((numAdherentsDeleted) => {
            res.status(200).send({ message: `${numAdherentsDeleted} adherents have been deleted successfully!` });
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};


//delete Adherent with User By Numero
const deleteByNumero = async (req,res) => {
    const { numero } = req.params;

    try {

        const adherent = await Adherent.findOne({ where: { numero } });

        if (!adherent) {
            return res.status(404).json({ message: 'Adherent not found' });
        }


        const user = await User.findOne({ where: { numero } });
        if (user) {
            await user.destroy();
        }

        await adherent.destroy();

        res.status(200).json({ message: 'Adherent and User deleted successfully' });
    } catch (err){
        res.status(500).json({ message: err.message });
    }
}


// findAll adherents
const findAll = (req, res) => {
    Adherent.findAll()
        .then((adherents) => {
            if (adherents.length > 0) {
                // Les adherents ont été trouvés
                res.status(200).json(adherents);
            } else {
                // Aucun adherent n'a été trouvé
                res.status(404).json({ message: 'Aucun adherent n\'a été trouvé' });
            }
        })
        .catch((err) => {
            // Une erreur s'est produite
            res.status(500).json({ message: 'Une erreur s\'est produite' });
        });
};

//find adherent by numero
const findAdherentByNumero = (req, res) => {
    const adherentNumero = req.params.numero;

    Adherent.findOne({ where: { numero: adherentNumero } })
        .then((adherent) => {
            if (adherent) {
                // L'adherent a été trouvé
                res.status(200).json(adherent);
            } else {
                // L'adherent n'existe pas
                res.status(404).json({ message: 'L\'adherent n\'existe pas' });
            }
        })
        .catch((err) => {
            // Une erreur s'est produite
            res.status(500).json({ message: 'Une erreur s\'est produite' });
        });
};


// update Adherent
const updateAdherent = async (req, res) => {
    const numero = req.params.numero;
    const {
        nom,
        prenom,
        teleA,
        teleB,
        email,
        dateNaissance,
        dateAbonnement,
        dateCotisation,
        conjoint,
        etablissement,
        etatMatrimonial,
        profession,
        cin,
        nbrEnfants,
        teleFixe,
        genre,
        adresse
    } = req.body;

    try {
        // Vérifier si l'adhérent existe
        const adherent = await Adherent.findOne({where: {numero: numero}});
        if (!adherent) {
            return res.status(404).json({ message: "Adhérent n'existe pas" });
        }

        // Mettre à jour les attributs de l'adhérent
        await Adherent.update(
            {
                nom,
                prenom,
                teleA,
                teleB,
                email,
                dateNaissance,
                dateAbonnement,
                dateCotisation,
                conjoint,
                etablissement,
                etatMatrimonial,
                profession,
                cin,
                nbrEnfants,
                teleFixe,
                genre,
                adresse
            },
            { where: { numero } }
        );

        res.status(200).json({ message: "Adhérent mis à jour avec succès", adherent });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const bcrypt = require('bcrypt');
const db = require("../models");




module.exports={
    createAdherentWithUser,
    deleteAll,
    deleteByNumero,
    findAll,
    findAdherentByNumero,
    updateAdherent,
    getReservationsByAdherent,

}
