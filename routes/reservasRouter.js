const express = require('express');
const router = express.Router();

//Importo modelo de datos
const reservasController = require('../controllers/reservasController');

// End-points CRUD Reservas
router.get('/', reservasController.getAll);
router.get('/:id', reservasController.getById);
router.get('/cliente/:dni', reservasController.getByDniCliente);
router.get('/telefono/:telefono', reservasController.getByTelefono);
router.get('/email/:email', reservasController.getByEmail);
router.get('/hotel/:hotelId', reservasController.getByHotelId);
router.get('/entrada/fechaEntrada', reservasController.getByFechaEntrada);
router.get('/salida/fechaSalida', reservasController.getByFechaSalida);

module.exports = router;