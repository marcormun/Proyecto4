const express = require('express');
const router = express.Router();

//Importo modelo de datos
const reservasController = require('../controllers/reservasController');

// End-points CRUD Reservas
router.get('/', reservasController.getAll);
router.get('/:id', reservasController.getById);
router.get('/dniCliente/:dni', reservasController.getByDniCliente);
router.get('/hotel/:hotelId', reservasController.getByHotelId);
router.get('/entrada/:fechaEntrada', reservasController.getByFechaEntrada);
router.get('/salida/:fechaSalida', reservasController.getByFechaSalida);

module.exports = router;