const express = require('express');
const route = express.Router();
const roleController = require('../controllers/RoleController');


/*** Middleware pour logger dates de requete */
route.use( (req, res, next) => {
    const event = new Date()
    console.log('Role Time:', event.toString())
    next()
})

route.post('/', roleController.createRole);
route.get('/', roleController.findAll);
route.get('/findRoleById/:id', roleController.findRoleById);
route.put('/updateRole/:id', roleController.updateRole);
route.delete('/', roleController.deleteAll);
route.delete('/deleteById/:id', roleController.deleteById);
route.put('/updateRoleByName/:nom', roleController.updateRoleByName);
route.get('/findUsersByRoleId/:id', roleController.findUsersByRoleId);
route.get('/findUsersByRoleName/:nom', roleController.findUsersByRoleName);


module.exports = route;
