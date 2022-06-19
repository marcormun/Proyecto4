const router = require('express').Router();
const reservasRouter = require('./routes/reservasRouter.js');

//url de la api
router.use('/reservas', reservasRouter);

module.exports = router;