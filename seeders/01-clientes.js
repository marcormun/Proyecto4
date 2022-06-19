'use strict';
//INSERTS Clientes
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [{
      "dni": "11111111A",
      "nombre": "Billi",
      "telefono": "6885309",
      "email": "blabeuil0@zimbio.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111B",
      "nombre": "Hagen",
      "telefono": "7902856",
      "email": "harnaez1@dagondesign.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111C",
      "nombre": "Tallie",
      "telefono": "6105769",
      "email": "tantoniat2@unc.edu",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111D",
      "nombre": "Kaja",
      "telefono": "7681728",
      "email": "klower3@csmonitor.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111E",
      "nombre": "Wilburt",
      "telefono": "7101540",
      "email": "wfree4@slideshare.net",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111F",
      "nombre": "Paxton Speddin",
      "telefono": "7781918",
      "email": "pspeddin5@nhs.uk",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111G",
      "nombre": "Berk Charlot",
      "telefono": "8156557",
      "email": "bcharlot6@google.it",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111H",
      "nombre": "Tonie Trees",
      "telefono": "1521040",
      "email": "ttrees7@imdb.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111I",
      "nombre": "Valera Dibling",
      "telefono": "4081456",
      "email": "vdibling8@ibm.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111J",
      "nombre": "Darryl Oldershaw",
      "telefono": "9187566",
      "email": "doldershaw9@hc360.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111K",
      "nombre": "Alva Minucci",
      "telefono": "6154341",
      "email": "aminuccia@ibm.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111L",
      "nombre": "Morley Alcido",
      "telefono": "2199972",
      "email": "malcidob@weibo.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111M",
      "nombre": "Shari Deary",
      "telefono": "5816106",
      "email": "sdearyc@icio.us",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111N",
      "nombre": "Darbee Walley",
      "telefono": "2237218",
      "email": "dwalleyd@ustream.tv",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111O",
      "nombre": "Corliss MacAskill",
      "telefono": "1261680",
      "email": "cmacaskille@vinaora.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111P",
      "nombre": "Sally Champkin",
      "telefono": "2938386",
      "email": "schampkinf@smh.com.au",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111Q",
      "nombre": "Guillaume Burford",
      "telefono": "4108973",
      "email": "gburfordg@newsvine.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111R",
      "nombre": "Lu Hercules",
      "telefono": "5825131",
      "email": "lherculesh@google.es",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111S",
      "nombre": "Opal Jedrachowicz",
      "telefono": "2497475",
      "email": "ojedrachowiczi@canalblog.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }, {
      "dni": "11111111T",
      "nombre": "Gustavus Pea",
      "telefono": "3307419",
      "email": "gpeaj@forbes.com",
      "createdAt": "2021-11-30 18:25:43",
      "updatedAt": "2022-06-15 11:58:40"
    }], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('clientes', null, {});
     
  }
};
