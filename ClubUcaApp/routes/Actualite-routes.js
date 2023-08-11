const express = require('express');
const route = express.Router();
const actualiteController = require('../controllers/ActualiteController');
route.post('/',actualiteController.createActualite);
route.get('/',actualiteController.getAllActualites);
route.get('/:id',actualiteController.getActualiteById);
route.put('/id/:id',actualiteController.updateActualite);
route.delete('/id/:id',actualiteController.deleteActualite);

module.exports = route;