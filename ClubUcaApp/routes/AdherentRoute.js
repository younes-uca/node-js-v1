const express = require('express');
const route = express.Router();
const adherentController = require('../controllers/AdherentController');

route.use( (req, res, next) => {
    const event = new Date()
    console.log('Adherent Time:', event.toString())
    next()
})

route.post('/', adherentController.createAdherentWithUser);
route.delete('/', adherentController.deleteAll);
route.delete('/deleteByNumero/:numero', adherentController.deleteByNumero);
route.get('/', adherentController.findAll);
route.get('/:numero', adherentController.findAdherentByNumero);
route.put('/:numero', adherentController.updateAdherent);
route.get('/reservationsAdherent/:numero', adherentController.getReservationsByAdherent);


module.exports = route;
