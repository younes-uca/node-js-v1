const express = require('express');
const route = express.Router();
const reponseController = require('../controllers/ReponseController');


/*** Middleware pour logger dates de requete */
route.use( (req, res, next) => {
    const event = new Date()
    console.log('Reponse Time:', event.toString())
    next()
})

route.post('/', reponseController.createReponseForMessage);
route.get('/:messageId', reponseController.getReponsesForMessage);
route.put('/:id', reponseController.update);
route.delete('/:id', reponseController.deleteReponse);





module.exports=route;
