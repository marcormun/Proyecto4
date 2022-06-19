'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
    static associate(models) {
      //Relaciones
      this.hasMany(models.reservas,{
        foreignKey:'dni',
      });
    }
  }
  clientes.init({
    dni: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nombre: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'clientes',
  });
  clientes.removeAttribute('id');
  return clientes;
};