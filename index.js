const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');
const db = require('./db.js');
const router = require('./router.js');

//Llamado a express
const app = express();
//Variable del puerto de heroku
const PORT = process.env.PORT || 3000; //Configuramos puerto heroku

//Middleware
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());

//Rutas
app.use(router);
app.get('/', (req, res) => res.send('API de reservas'));

//Conexion a la base de datos
db.then(()=>{
        app.listen(PORT, ()=> console.log(`Server on port ${PORT}`.bgGreen.black));
    })
    .catch((err)=> console.log(err.message));
