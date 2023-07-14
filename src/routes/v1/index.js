const express=require('express');

const router = express.Router();
const {infoController}= require('../../controllers');
const airplaneRoutes =require('./airplane-routes');

router.get('/info',infoController.info); 
router.use('/airplanes',airplaneRoutes);


module.exports=router;