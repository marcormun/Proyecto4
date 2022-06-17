//Importo modelo de datos
const db = require("../models");
const Reservas = db.reserva;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

//Para las dependencias
var hotelModel  = require('../models').hotel;  
var clientModel  = require('../models').cliente;

const ReservaController = {}; // Creamos el controloador de reservas



//CRUD end-points Functions
//GET all reservas
ReservaController.getAll = (req, res) => {
    
    Reservas.findAll({include: [{ model:hotelModel}, {model:clientModel}] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha ocurrido algun error mostrando las Reservas."
        });
      });
  };

//GET Reservas by Id
ReservaController.getById = (req, res) => {
    const id = req.params.id;

    Reservas.findByPk(id, {include: [{ model:hotelModel}, {model:clientModel}]})
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
          message: "Error retrieving Reservas with id=" + id
        });
      });
  };

  //GET reserva por nombre de cliente

ReservaController.getByDniCliente = (req, res) => {
    Reservas.findAll({
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
  ReservaController.getByTelefono = (req, res) => {
    Reservas.findAll({
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
  ReservaController.getByEmail = (req, res) => {
    Reservas.findAll({
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
  ReservaController.getByHotelId = (req, res) => {
    Reservas.findAll({
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
  ReservaController.getByFechaEntrada = (req, res) => {
    Reservas.findAll({
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
  ReservaController.getByFechaSalida = (req, res) => {
    Reservas.findAll({
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

module.exports = ReservaController;