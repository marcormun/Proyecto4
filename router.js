const router = require('express').Router();
const reservasRouter = require('./routes/reservasRouter.js');

router.use('/reservas', reservasRouter);

module.exports = router;