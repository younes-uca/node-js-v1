const express = require('express');
const route = express.Router();
const contactController = require('../controllers/ContactController');
route.post('/',contactController.createContact);
route.get('/',contactController.getAllContacts);
route.get('/:id',contactController.getContactById);

module.exports = route;