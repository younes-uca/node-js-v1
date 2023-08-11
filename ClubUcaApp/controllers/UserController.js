const {User, Adherent,Role} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {where} = require("sequelize");

const changePassword = async (req, res) => {
    const userId = req.params.id;
    const {oldPassword, newPassword} = req.body;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({message: "User n'existe pas"});
        }
        if (!oldPassword || !newPassword) {
            return res.status(400).json({message: 'Veuillez fournir l\'ancien et le nouveau mot de passe'});
        }

        const isPasswordMatch = await bcrypt.compare(oldPassword, user.newPassword);

        if (!isPasswordMatch) {
            return res.status(400).json({message: "Ancien mot de passe incorrect"});
        }

        if (oldPassword === newPassword) {
            return res.status(400).json({message: 'Le nouveau mot de passe doit être différent de l\'ancien'});
        }
        if (newPassword.length < 8) {
            return res.status(400).json({message: 'Le nouveau mot de passe doit comporter au moins 8 caractères'});
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await User.update({newPassword: hashedPassword}, {where: {id: userId}});

        res.status(200).json({message: "Le mot de passe a été modifié avec succès"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const resetPassword = async (req, res) => {
    const {premierMdp, nouveauMdp} = req.body;

    try {
        const user = await User.findOne({where: { firstPassword: premierMdp }});

        if (!user) {
            return res.status(404).json({message: "User n'existe pas"});
        }
        if (!premierMdp || !nouveauMdp) {
            return res.status(400).json({message: 'Veuillez fournir le premier et le nouveau mot de passe'});
        }

        if (premierMdp !== user.firstPassword) {
            return res.status(400).json({message: "Ancien mot de passe incorrect"});
        }

        if (premierMdp === nouveauMdp) {
            return res.status(400).json({message: 'Le nouveau mot de passe doit être différent de l\'ancien'});
        }
        if (nouveauMdp.length < 8) {
            return res.status(400).json({message: 'Le nouveau mot de passe doit comporter au moins 8 caractères'});
        }

        const hashedPassword = await bcrypt.hash(nouveauMdp, 10);

        await User.update({newPassword: hashedPassword}, {where: {firstPassword: premierMdp}});


        res.status(200).json({message: "Le mot de passe a été modifié avec succès"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const login = async (req, res) => {
    const {numero, password} = req.body;

    try {
        if (!numero || !password) {
            return res.status(400).json({message: 'Bad numero or password'});
        }

        const user = await User.findOne({
            where: {numero: numero},
            include: {
                model: Adherent,
                attributes: ['nom', 'prenom', 'teleB', 'email', 'dateNaissance', 'dateAbonnement', 'dateCotisation', 'conjoint', 'etablissement', 'etatMatrimonial', 'profession', 'cin', 'nbrEnfants', 'teleFixe', 'genre', 'adresse'],
                model: Role,
                attributes: ['nom']
            },
        });

        if (!user) {
            return res.status(404).json({message: `adherent avec numero ${numero} n'existe pas`});
        }
        if (user.Role.nom != 'adherent'){
            return res.status(404).json({message: ` vous etes pas adherent`});

        }

        const comparaisonMdp = await bcrypt.compare(password, user.newPassword);
        if (!comparaisonMdp) {
            return res.status(401).json({message: "Le mot de passe est incorrect"});
        }

        const adherent = user.Adherent;
        const nom = adherent ? adherent.nom : '';
        const prenom = adherent ? adherent.prenom : '';
        const teleA = adherent ? adherent.teleA : '';
        const teleB = adherent ? adherent.teleB : '';
        const email = adherent ? adherent.email : '';
        const dateNaissance = adherent ? adherent.dateNaissance : '';
        const dateAbonnement = adherent ? adherent.dateAbonnement : '';
        const dateCotisation = adherent ? adherent.dateCotisation : '';
        const conjoint = adherent ? adherent.conjoint : '';
        const etablissement = adherent ? adherent.etablissement : '';
        const etatMatrimonial = adherent ? adherent.etatMatrimonial : '';
        const profession = adherent ? adherent.profession : '';
        const cin = adherent ? adherent.cin : '';
        const nbrEnfants = adherent ? adherent.nbrEnfants : '';
        const teleFixe = adherent ? adherent.teleFixe : '';
        const genre = adherent ? adherent.genre : '';
        const adresse = adherent ? adherent.adresse : '';

        const role = user.Role;
        const roleNom = role ? role.nom : '';

        // Génération du token et envoi
        const token = jwt.sign({
            id: user.id,
            numero: user.numero,
            nom: nom,
            prenom: prenom,
            teleA: teleA,
            teleB: teleB,
            email: email,
            dateNaissance: dateNaissance,
            dateAbonnement: dateAbonnement,
            dateCotisation: dateCotisation,
            conjoint: conjoint,
            etablissement: etablissement,
            etatMatrimonial: etatMatrimonial,
            profession: profession,
            cin: cin,
            nbrEnfants: nbrEnfants,
            teleFixe: teleFixe,
            genre: genre,
            adresse: adresse,
            roleNom: roleNom
        }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_DURING})

        return res.json({access_token: token})

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const loginDash = async (req, res) => {
    const {username, password} = req.body;

    try {
        if (!username || !password) {
            return res.status(400).json({message: 'Bad username or password'});
        }

        const user = await User.findOne({
            where: {username: username},
            include: {
                model: Role,
                attributes: ['nom']
            },
        });

        if (!user) {
            return res.status(404).json({message: `user avec username ${username} n'existe pas`});
        }

        if (username != 'admin' ){
            return res.status(404).json({message: 'vous etes pas admin'})
        }
        const comparaisonMdpAdm = await bcrypt.compare(password, user.newPassword);
        if (!comparaisonMdpAdm) {
            return res.status(401).json({message: "Le mot de passe est incorrect"});
        }
        const role = user.Role;
        const roleNom = role ? role.nom : '';

        // Génération du token et envoi
        const token = jwt.sign({
            id: user.id,
            numero: user.numero,
            username: user.username,
            roleNom: roleNom
        }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_DURING})

        return res.json({access_token: token})

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


// ...

// Création d'un nouvel utilisateur avec un rôle existant et un mot de passe haché
const createUser = async (req, res) => {
    try {
        // Vérification si le rôle existe
        const role = await Role.findOne({ where: { nom: req.body.roleNom } });
        if (!role) {
            return res.status(404).json({ message: 'Le rôle spécifié n\'existe pas' });
        }
        const userr = await User.findOne({ where: { numero: req.body.numero } });
        if  (userr) {
            return res.status(404).json({ message: 'user spécifié existe deja' });
        }

        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
          newPassword = hashedPassword ;

        // Création de l'utilisateur avec le rôle existant et le mot de passe haché
        const user = await User.create({
            numero: req.body.numero,
            username: req.body.username,
            firstPassword: hashedPassword,
            newPassword
        });

        // Association de l'utilisateur avec le rôle
        await user.setRole(role);

        return res.status(200).json({ message: 'Utilisateur créé avec succès', user });
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur avec un rôle existant et un mot de passe haché :', error);
        return res.status(500).json({ message: 'Une erreur est survenue lors de la création de l\'utilisateur' });
    }
};


const findUserById = (req, res) => {
    const userId = req.params.id;

    User.findByPk(userId)
        .then((user) => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({message: 'Le user n\'existe pas'});
            }
        })
        .catch((err) => {
            res.status(500).json({message: 'Une erreur s\'est produite'});
        });
};

const findAll = (req, res) => {
    User.findAll()
        .then((users) => {
            if (users.length > 0) {
                res.status(200).json(users);
            } else {
                res.status(404).json({message: 'Aucun user n\'a été trouvé'});
            }
        })
        .catch((err) => {
            res.status(500).json({message: 'Une erreur s\'est produite'});
        });
};

const findUserByNumero = (req, res) => {
    const userNumero = req.params.numero;

    User.findOne({where: {numero: userNumero}})
        .then((user) => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({message: 'Le user n\'existe pas'});
            }
        })
        .catch((err) => {
            res.status(500).json({message: 'Une erreur s\'est produite'});
        });
};

module.exports = {
    changePassword,
    findUserById,
    resetPassword,
    findAll,
    login,
    findUserByNumero,
    createUser,
    loginDash,
};
