const express = require('express');
const router = express.Router();

//Vinculo con el controlador
const reservasController = require('../controllers/reservasController');

// End-points de Reservas
router.get('/', reservasController.getAll);
router.get('/:id', reservasController.getById);
router.get('/dniCliente/:dni', reservasController.getByDniCliente);
router.get('/hotel/:hotelId', reservasController.getByHotelId);
router.get('/entrada/:fechaEntrada', reservasController.getByFechaEntrada);
router.get('/salida/:fechaSalida', reservasController.getByFechaSalida);

module.exports = router;