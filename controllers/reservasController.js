//Importo modelo de datos
const db = require("../models");
const reservas = db.reserva;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

//Para las dependencias
var hotelModel  = require('../models').hoteles;  
var clientModel  = require('../models').clientes;

const reservasController = {}; // Creamos el controloador de reservas



//CRUD end-points Functions
//GET all reservas
reservasController.getAll = (req, res) => {
    
    reservas.findAll({include: [{ model:hotelModel}, {model:clientModel}] })
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

    reservas.findByPk(id, {include: [{ model:hotelModel}, {model:clientModel}]})
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
    reservas.findAll({
        include: [{ 
            model:hotelModel,
            model:clientModel,
            where: { clientName: req.params.clientName }}]})
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
// get reserva por telefono
reservasController.getByTelefono = (req, res) => {
    reservas.findAll({
        include: [{ 
            model:hotelModel,
            model:clientModel,
            where: { telefono: req.params.telefono }}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha habido algun error buscando el telefono."
        });
      });
  };

  // get por email
  reservasController.getByEmail = (req, res) => {
    reservas.findAll({
        include: [{ 
            model:hotelModel,
            model:clientModel,
            where: { email: req.params.email }}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha habido algun error buscando el email."
        });
      });
  };
  reservasController.getByHotelId = (req, res) => {
    reservas.findAll({
        include: [{ 
            model:hotelModel,
            model:clientModel,
            where: { hotelName: req.params.hotelName }}]})
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
    reservas.findAll({
        include: [{ 
            model:hotelModel,
            model:clientModel,
            where: { fechaEntrada: req.params.fechaEntrada }}]})
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
    reservas.findAll({
        include: [{ 
            model:hotelModel,
            model:clientModel,
            where: { fechaSalida: req.params.fechaSalida }}]})
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