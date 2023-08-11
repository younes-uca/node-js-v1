const express = require('express');
const route = express.Router();
const excelController = require("../controllers/excel.controller");
const upload = require("../config/upload");



/*** Middleware pour logger dates de requete */
route.use( (req, res, next) => {
    const event = new Date()
    console.log('Excel Time:', event.toString())
    next()
})

route.post("/upload", upload.single("file"), excelController.upload);
module.exports = route;

