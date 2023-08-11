const express = require('express');
const route = express.Router();
const logementController = require('../controllers/LogementController');

route.post('/',logementController.createLogement);
route.get('/',logementController.getAllLogements);

/*** Middleware pour logger dates de requete */
route.use( (req, res, next) => {
    const event = new Date()
    console.log('Logement Time:', event.toString())
    next()
})






module.exports=route;
