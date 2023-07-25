const express=require('express');

const router = express.Router();
const {infoController}= require('../../controllers');
const airplaneRoutes =require('./airplane-routes');
const cityRoutes = require('./city-routes');
const airports=require('./airport-routes');
const flights =require('./flight-routes')


router.get('/info',infoController.info); 
router.use('/airplanes',airplaneRoutes);
router.use('/cities', cityRoutes);
router.use('/airports', airports);
router.use('/flights', flights);

module.exports=router;