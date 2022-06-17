'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      importe: {
        type: Sequelize.INTEGER
      },
      fechaEntrada: {
        type: Sequelize.DATE
      },
      fechaSalida: {
        type: Sequelize.DATE
      },
      dni: {
        type: Sequelize.STRING,
        references: {
          model: 'clientes',
          key: 'dni'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' 
      },
      hotelId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'hoteles',
          key: 'hotelId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reservas');
  }
};