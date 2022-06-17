'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      reservas.belongsTo(models.clientes,{
        foreignKey: 'dni',
      })
    };
    static associate(models) {
      reservas.belongsTo(models.hoteles,{
        foreignKey: 'hotelId',
      })
    };
  }
  reservas.init({
    importe: DataTypes.INTEGER,
    fechaEntrada: DataTypes.DATE,
    fechaSalida: DataTypes.DATE,
    hotelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reservas',
  });
  return reservas;
};