const express = require('express');
const route = express.Router();
const userController = require('../controllers/UserController');

const checkTokenMiddleware = require('../jsonwebtoken/check')


/*** Middleware pour logger dates de requete */
route.use( (req, res, next) => {
    const event = new Date()
    console.log('User Time:', event.toString())
    next()
})

route.put('/:id', userController.changePassword);
route.get('/:id', userController.findUserById);
route.post('/resetPassword', userController.resetPassword);
route.post('/login', userController.login);
route.post('/loginDash', userController.loginDash);

route.get('/', userController.findAll);
route.post('/', userController.createUser);
route.get('/findUserByNumero/:numero', userController.findUserByNumero);

module.exports = route;
