const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const corsOrigin = require('./config/corsConfig');


const db = require('./models/index');
const roleRoute = require('./routes/RoleRoute');
const userRoute = require('./routes/UserRoute');
const adherentRoute = require('./routes/AdherentRoute');
const reservationRoute = require('./routes/ReservationRoute');
const logementRoute = require('./routes/LogementRoute');
const reponseRoute = require('./routes/ReponseRoute');
const actualiteRoute = require('./routes/Actualite-routes');
const excelRoute = require('./routes/excel-router');
const contactRoute = require('./routes/ContactRoutes');
const responseRoute = require('./routes/ResponseRoute');

global.__basedir = __dirname + "/.";

app.use(cors(corsOrigin));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/role/',roleRoute);
app.use('/api/v1/user/',userRoute);
app.use('/api/v1/adherent/',adherentRoute);
app.use('/api/v1/logement/',logementRoute);
app.use('/api/v1/reponse/',reponseRoute);
app.use('/api/v1/reservation/',reservationRoute);

app.use('/api/v1/excel/', excelRoute);

app.get('/',(req,res)=>{
    res.send('Hello world')
})
//routes
app.use('/api/v1/actualite',actualiteRoute);
app.use('/api/v1/contact',contactRoute);
app.use('/api/v1/response',responseRoute);



db.sequelize.sync().then(()=>{
    app.listen(8032,()=>console.log('app is running on the port 8032'))
})


