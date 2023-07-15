const express=require('express');

const router = express.Router();
const {infoController}= require('../../controllers');
const airplaneRoutes =require('./airplane-routes');
const cityRoutes = require('./city-routes');

router.get('/info',infoController.info); 
router.use('/airplanes',airplaneRoutes);
router.use('/cities', cityRoutes);


module.exports=router;