const express = require('express');
const route = express.Router();
const reservationController = require('../controllers/ReservationController');

/*** Middleware pour logger dates de requete */
route.use( (req, res, next) => {
    const event = new Date()
    console.log('Reservation Time:', event.toString())
    next()
})
route.post('/',reservationController.createReservation);
route.post('/create',reservationController.createReservationAdherent);
route.get('/',reservationController.getAllReservations);
route.get('/:id',reservationController.getReservationById);
route.get('/logement-reserve/:logementId',reservationController.getDatesLogementsRemplis);
route.put('/id/:id',reservationController.updateReservation);
route.delete('/id/:id',reservationController.deleteReservation);








module.exports=route;
