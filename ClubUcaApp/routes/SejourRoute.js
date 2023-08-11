const express = require('express');
const route = express.Router();
const sejourController = require('../controllers/SejourController');


/*** Middleware pour logger dates de requete */
route.use( (req, res, next) => {
    const event = new Date()
    console.log('Sejour Time:', event.toString())
    next()
})





module.exports=route;
