'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [{
      "dni": "11111111A",
      "nombre": "Billi",
      "telefono": "6885309402",
      "email": "blabeuil0@zimbio.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111B",
      "nombre": "Hagen",
      "telefono": "7902856357",
      "email": "harnaez1@dagondesign.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111C",
      "nombre": "Tallie",
      "telefono": "6105769127",
      "email": "tantoniat2@unc.edu",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111D",
      "nombre": "Kaja",
      "telefono": "7681728041",
      "email": "klower3@csmonitor.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111E",
      "nombre": "Wilburt",
      "telefono": "7101540189",
      "email": "wfree4@slideshare.net",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111F",
      "nombre": "Paxton Speddin",
      "telefono": "7781918958",
      "email": "pspeddin5@nhs.uk",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111G",
      "nombre": "Berk Charlot",
      "telefono": "8156557861",
      "email": "bcharlot6@google.it",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111H",
      "nombre": "Tonie Trees",
      "telefono": "1521040920",
      "email": "ttrees7@imdb.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111I",
      "nombre": "Valera Dibling",
      "telefono": "4081456412",
      "email": "vdibling8@ibm.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111J",
      "nombre": "Darryl Oldershaw",
      "telefono": "9187566713",
      "email": "doldershaw9@hc360.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111K",
      "nombre": "Alva Minucci",
      "telefono": "6154341337",
      "email": "aminuccia@ibm.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111L",
      "nombre": "Morley Alcido",
      "telefono": "2199972682",
      "email": "malcidob@weibo.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111M",
      "nombre": "Shari Deary",
      "telefono": "5816106558",
      "email": "sdearyc@icio.us",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111N",
      "nombre": "Darbee Walley",
      "telefono": "2237218891",
      "email": "dwalleyd@ustream.tv",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111O",
      "nombre": "Corliss MacAskill",
      "telefono": "1261680837",
      "email": "cmacaskille@vinaora.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111P",
      "nombre": "Sally Champkin",
      "telefono": "2938386812",
      "email": "schampkinf@smh.com.au",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111Q",
      "nombre": "Guillaume Burford",
      "telefono": "4108973862",
      "email": "gburfordg@newsvine.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111R",
      "nombre": "Lu Hercules",
      "telefono": "5825131657",
      "email": "lherculesh@google.es",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111S",
      "nombre": "Opal Jedrachowicz",
      "telefono": "2497475558",
      "email": "ojedrachowiczi@canalblog.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111T",
      "nombre": "Gustavus Pea",
      "telefono": "3307419530",
      "email": "gpeaj@forbes.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('clientes', null, {});
     
  }
};
