
const status = require('http-status');
const {AirplaneService} =require('../services');
const {SuccessResponse,ErrorResponse} = require('../utils/common');


async function createAirplane(req,res){
    try{
        const airplane = await AirplaneService.createAirplane({
        modelNumber:req.body.modelNumber,
        capacity :req.body.capacity
        });
        SuccessResponse.data=airplane;
        return res.status(status.CREATED).json(SuccessResponse);

    }
    catch(error){
        //ErrorResponse.message = 'something went wrong while creating airplane';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);                 
    }
}

module.exports ={
    createAirplane
}