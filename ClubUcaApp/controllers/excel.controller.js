const db = require("../models");
const Adherent = db.Adherent;
const { User, Role } = require("../models");
const readXlsxFile = require("read-excel-file/node");
const generatePassword = require("generate-password");
const bcrypt = require("bcrypt");

const upload = async (req, res) => {
    try {
        if (req.file === undefined) {
            return res.status(400).send("Please upload an excel file!");
        }

        let path =
            "C:/Users/HP/Desktop/Stage_PFE/ClubUcaApp/resources/static/assets/uploads/" +
            req.file.filename;

        const rows = await readXlsxFile(path);
        // skip header
        rows.shift();

        let adherents = [];

        for (let row of rows) {
            let adherent = {
                numero: row[0],
                prenom: row[1],
                nom: row[2],
                email: row[3],
                dateNaissance: row[4],
                dateAbonnement: row[5],
                dateCotisation: row[6],
                conjoint: row[7],
                etablissement: row[8],
                etatMatrimonial: row[9],
                profession: row[10],
                cin: row[11],
                nbrEnfants: row[12],
                teleFixe: row[13],
                teleB: row[14],
                teleA: row[15],
                genre: row[16],
                adresse: row[17],
            };

            adherents.push(adherent);
        }

        const createdAdherents = await Adherent.bulkCreate(adherents);

        for (let adherent of createdAdherents) {
            if (adherent.numero) {
                const firstPassword = generatePassword.generate();
                const hashedPassword = await bcrypt.hash(firstPassword, 10);

                const user = await User.create({
                    numero: adherent.numero,
                    firstPassword: firstPassword,
                    newPassword: hashedPassword,
                });

                const adherentRole = await Role.findOne({ where: { nom: "adherent" } });

                await user.setRole(adherentRole);
                await adherent.setUser(user);
            }
        }

        // Récupérer les adhérents avec les utilisateurs associés
        const adherentsWithUsers = await Adherent.findAll({ include: User });

        res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
            adherents: adherentsWithUsers,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Could not upload the file: " + req.file.originalname,
            error: error.message,
        });
    }
};

const getAdherents = (req, res) => {
    Adherent.findAll({ include: User })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving adherents.",
            });
        });
};

module.exports = {
    upload,
    getAdherents,
};
