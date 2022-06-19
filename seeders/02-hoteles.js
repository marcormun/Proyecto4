'use strict';
//INSERTS Hoteles
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hoteles', [{
      "nombre": "Raccoon",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Stork",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Squirrel",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Kinkajou",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Bare-faced",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Magpie",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Mouse",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "White-fronted",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Northern",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Squirrel",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Bee-eater",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Eastern",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Common",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Badger",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Snake",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Turkey",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Seal",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Insect",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Lynx",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "nombre": "Bird",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hoteles', null, {});
  }
};
