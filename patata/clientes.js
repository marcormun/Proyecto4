'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.reservas,{
        foreignKey:'id',
      });
    }
  }
  clientes.init({
    dni: DataTypes.STRING,
    nombre: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'clientes',
  });
  return clientes;
};