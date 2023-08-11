const express = require('express');
const route = express.Router();
const responseController = require('../controllers/ResponseController');
route.post('/',responseController.createResponse);

module.exports = route;