const db = require("../models");
const reservas = db.reservas;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

var hotelModel  = require('../models').hoteles;  
var clientModel  = require('../models').clientes;

const reservasController = {}; // Creamos el controloador de reservas


//GET reservas
reservasController.getAll = (req, res) => {
    
    reservas.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha ocurrido algun error mostrando las reservas."
        });
      });
  };

//GET reservas by Id
reservasController.getById = (req, res) => {
    const id = req.params.id;

    reservas.findByPk(id  )
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No se ha podido encontrar la Reserva con id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving reservas with id=" + id
        });
      });
  };

  //GET reserva por nombre de cliente

  reservasController.getByDniCliente = (req, res) => {
    reservas.findAll(
            {where: { dni: req.params.dni }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha habido algun error buscando el cliente."
        });
      });
  };
  reservasController.getByHotelId = (req, res) => {
    reservas.findAll({where: { hotelId: req.params.hotelId }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha habido algun error buscando el nombre del hotel."
        });
      });
  };
  reservasController.getByFechaEntrada = (req, res) => {
    reservas.findAll({where: { fechaEntrada: req.params.fechaEntrada }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha habido algun error buscando la fecha de entrada."
        });
      });
  };
  reservasController.getByFechaSalida = (req, res) => {
    reservas.findAll({where: { fechaSalida: req.params.fechaSalida }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha habido algun error buscando la fecha de Salida."
        });
      });
  };

module.exports = reservasController;