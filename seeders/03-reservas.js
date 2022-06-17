'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reservas', [{
      "importe": 77,
      "fechaEntrada": "2022-06-13 08:55:44",
      "fechaSalida": "2021-07-17 14:25:04",
      "createdAt": "2021-10-27 06:20:52",
      "updatedAt": "2021-07-22 07:46:10",
      "dni": "11111111D",
      "hotelId": 1
    }, {
      "importe": 37,
      "fechaEntrada": "2022-01-28 18:52:06",
      "fechaSalida": "2022-05-21 11:24:00",
      "createdAt": "2022-04-22 19:05:20",
      "updatedAt": "2022-02-24 11:45:49",
      "dni": "11111111A",
      "hotelId": 11
    }, {
      "importe": 68,
      "fechaEntrada": "2022-02-22 21:07:18",
      "fechaSalida": "2022-03-23 23:08:28",
      "createdAt": "2022-01-31 17:04:35",
      "updatedAt": "2021-11-04 20:59:48",
      "dni": "11111111B",
      "hotelId": 21
    }, {
      "importe": 81,
      "fechaEntrada": "2021-08-14 16:22:30",
      "fechaSalida": "2021-11-30 23:12:56",
      "createdAt": "2021-09-25 01:21:27",
      "updatedAt": "2021-07-30 09:12:45",
      "dni": "11111111I",
      "hotelId": 31
    }, {
      "importe": 68,
      "fechaEntrada": "2022-02-04 15:11:23",
      "fechaSalida": "2021-08-06 02:59:19",
      "createdAt": "2022-03-27 01:26:10",
      "updatedAt": "2021-08-01 11:55:26",
      "dni": "11111111E",
      "hotelId": 41
    }, {
      "importe": 72,
      "fechaEntrada": "2021-09-24 05:24:56",
      "fechaSalida": "2022-04-27 22:16:27",
      "createdAt": "2022-04-23 11:29:45",
      "updatedAt": "2022-04-04 00:50:43",
      "dni": "11111111C",
      "hotelId": 51
    }, {
      "importe": 28,
      "fechaEntrada": "2022-02-20 10:39:38",
      "fechaSalida": "2022-06-03 01:58:40",
      "createdAt": "2021-08-21 22:10:05",
      "updatedAt": "2022-02-05 10:55:37",
      "dni": "11111111G",
      "hotelId": 61
    }, {
      "importe": 44,
      "fechaEntrada": "2021-09-20 16:49:52",
      "fechaSalida": "2021-10-11 18:51:07",
      "createdAt": "2021-10-14 19:10:37",
      "updatedAt": "2021-07-07 06:21:44",
      "dni": "11111111H",
      "hotelId": 71
    }, {
      "importe": 34,
      "fechaEntrada": "2021-10-20 20:51:12",
      "fechaSalida": "2021-06-27 10:08:39",
      "createdAt": "2022-05-08 02:00:31",
      "updatedAt": "2022-05-04 14:29:11",
      "dni": "11111111J",
      "hotelId": 81
    }, {
      "importe": 3,
      "fechaEntrada": "2021-11-05 08:52:11",
      "fechaSalida": "2022-01-04 09:05:53",
      "createdAt": "2022-04-17 04:03:39",
      "updatedAt": "2022-03-29 01:46:53",
      "dni": "11111111F",
      "hotelId": 91
    }, {
      "importe": 40,
      "fechaEntrada": "2021-07-05 12:23:58",
      "fechaSalida": "2022-04-10 18:16:40",
      "createdAt": "2021-07-09 04:26:20",
      "updatedAt": "2022-02-09 10:47:40",
      "dni": "11111111K",
      "hotelId": 101
    }, {
      "importe": 83,
      "fechaEntrada": "2021-11-17 05:11:56",
      "fechaSalida": "2021-11-29 10:49:53",
      "createdAt": "2021-11-14 12:53:55",
      "updatedAt": "2022-01-17 03:54:22",
      "dni": "11111111L",
      "hotelId": 111
    }, {
      "importe": 44,
      "fechaEntrada": "2021-09-06 14:06:53",
      "fechaSalida": "2022-06-07 08:45:22",
      "createdAt": "2021-12-04 09:43:32",
      "updatedAt": "2022-06-12 06:39:30",
      "dni": "11111111M",
      "hotelId": 121
    }, {
      "importe": 22,
      "fechaEntrada": "2021-10-18 14:19:52",
      "fechaSalida": "2022-04-25 19:03:41",
      "createdAt": "2021-07-07 16:20:18",
      "updatedAt": "2022-05-29 06:03:34",
      "dni": "11111111N",
      "hotelId": 131
    }, {
      "importe": 34,
      "fechaEntrada": "2021-12-15 11:02:34",
      "fechaSalida": "2022-02-16 09:43:51",
      "createdAt": "2022-04-27 03:43:46",
      "updatedAt": "2021-09-17 12:41:06",
      "dni": "11111111O",
      "hotelId": 141
    }, {
      "importe": 82,
      "fechaEntrada": "2021-08-21 11:07:21",
      "fechaSalida": "2021-08-02 04:54:49",
      "createdAt": "2022-03-06 22:56:46",
      "updatedAt": "2021-11-14 15:39:10",
      "dni": "11111111P",
      "hotelId": 151
    }, {
      "importe": 39,
      "fechaEntrada": "2022-04-15 10:54:06",
      "fechaSalida": "2022-01-01 19:42:32",
      "createdAt": "2021-07-07 10:58:02",
      "updatedAt": "2021-09-20 04:04:08",
      "dni": "11111111Q",
      "hotelId": 161
    }, {
      "importe": 56,
      "fechaEntrada": "2021-07-03 12:48:14",
      "fechaSalida": "2022-05-03 14:14:45",
      "createdAt": "2022-04-23 03:33:30",
      "updatedAt": "2022-04-12 10:20:15",
      "dni": "11111111R",
      "hotelId": 171
    }, {
      "importe": 66,
      "fechaEntrada": "2021-11-24 19:23:50",
      "fechaSalida": "2021-10-29 17:32:28",
      "createdAt": "2021-07-17 20:37:28",
      "updatedAt": "2021-12-31 19:04:44",
      "dni": "11111111S",
      "hotelId": 181
    }, {
      "importe": 14,
      "fechaEntrada": "2022-04-09 04:05:46",
      "fechaSalida": "2022-05-23 14:00:34",
      "createdAt": "2021-06-28 01:05:08",
      "updatedAt": "2021-12-12 12:52:14",
      "dni": "11111111T",
      "hotelId": 181
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reservas', null, {});
  }
};
