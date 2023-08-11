const db = require('../models');
const express = require("express");

//create role
const createRole = (req, res) => {
    db.Role.findOne({ where: { nom: req.body.nom } }).then((role) => {
        if (role) {
            // Le rôle existe déjà
            return res.status(400).json({ message: 'Le rôle existe déjà' });
        } else {
            // Créer un nouveau rôle
            db.Role.create({
                nom: req.body.nom,
            })
                .then((response) => {
                    res.status(200).json(response);
                })
                .catch((err) => res.status(400).send(err));
        }
    });
};

// findAll roles
const findAll = (req, res) => {
    db.Role.findAll()
        .then((roles) => {
            if (roles.length > 0) {
                // Les rôles ont été trouvés
                res.status(200).json(roles);
            } else {
                // Aucun rôle n'a été trouvé
                res.status(404).json({ message: 'Aucun rôle n\'a été trouvé' });
            }
        })
        .catch((err) => {
            // Une erreur s'est produite
            res.status(500).json({ message: 'Une erreur s\'est produite' });
        });
};

//find role by id
const findRoleById = (req, res) => {
    const roleId = req.params.id;

    db.Role.findOne({ where: { id: roleId } })
        .then((role) => {
            if (role) {
                // Le rôle a été trouvé
                res.status(200).json(role);
            } else {
                // Le rôle n'existe pas
                res.status(404).json({ message: 'Le rôle n\'existe pas' });
            }
        })
        .catch((err) => {
            // Une erreur s'est produite
            res.status(500).json({ message: 'Une erreur s\'est produite' });
        });
};

//update role
const updateRole = (req, res) => {
    const roleId = req.params.id;
    db.Role.findByPk(roleId)
        .then((role) => {
            if (!role) {
                return res.status(404).send('Role not found');
            }
            role.nom = req.body.nom || role.nom;
            role.save()
                .then((updatedRole) => {
                    res.status(200).send(updatedRole);
                })
                .catch((err) => {
                    res.status(400).send(err);
                });
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

//deleteAll roles
const deleteAll = (req, res) => {
    db.Role.destroy({
        where: {},
        truncate: false
    })
        .then((numRolesDeleted) => {
            res.status(200).send({ message: `${numRolesDeleted} roles have been deleted successfully!` });
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

//delete role by id
const deleteById = (req, res) => {
    const roleId = req.params.id;

    db.Role.destroy({
        where: { id: roleId }
    })
        .then((numRolesDeleted) => {
            if (numRolesDeleted === 1) {
                res.status(200).send({ message: 'Role has been deleted successfully!' });
            } else {
                res.status(404).send({ message: `Cannot delete role with id=${roleId}. Maybe the role was not found.` });
            }
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

//update role by name
const updateRoleByName = (req, res) => {
    const roleName = req.params.nom;

    db.Role.update(req.body, {
        where: { nom: roleName }
    })
        .then((numRolesUpdated) => {
            if (numRolesUpdated[0] === 1) {
                res.status(200).send({ message: 'Role was updated successfully.' });
            } else {
                res.status(404).send({ message: `Cannot update role with name=${roleName}. Maybe the role was not found.` });
            }
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

//find users by role id
const findUsersByRoleId = (req, res) => {
    const roleId = req.params.id;

    db.User.findAll({ where: { roleId: roleId } })
        .then((users) => {
            res.status(200).send(users);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

//find users by role name
const findUsersByRoleName = (req, res) => {
    const roleName = req.params.nom;

    db.Role.findOne({
        where: {
            nom: roleName
        }
    })
        .then(role => {
            if (role) {
                db.User.findAll({
                    where: {
                        roleId: role.id
                    }
                })
                    .then(users => {
                        res.status(200).send(users);
                    })
                    .catch(err => {
                        res.status(400).send(err);
                    });
            } else {
                res.status(404).send(`Le rôle ${roleName} n'existe pas.`);
            }
        })
        .catch(err => {
            res.status(400).send(err);
        });
}








module.exports={
    createRole,
    findAll,
    findRoleById,
    updateRole,
    deleteAll,
    deleteById,
    updateRoleByName,
    findUsersByRoleId,
    findUsersByRoleName,
}
