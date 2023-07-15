
const status = require('http-status');
const {AirplaneService} =require('../services');
const {SuccessResponse,ErrorResponse} = require('../utils/common');

/**
 * POST : /airplanes
 * req-body {modelNumber : 'airbus320', capacity : 200}
 * */
 
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

/**
 * GET : /airplanes
 * req-body {}
 * */
async function getAirplanes(req,res){
    try {
        const airplanes = await AirplaneService.getAirplanes(); 
        SuccessResponse.data=airplanes;
        return res.status(status.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
     
}
/**
 * GET : /airplane/:id
 * req-body {}
 * */
async function getAirplane(req,res){
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);

        SuccessResponse.data= airplane;
        return res.status(status.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


/**
 * DELETE : /airplane/:id
 * req-body {}
 * */

async function destroyAirplane(req, res) {
    try {
        const airplane = await AirplaneService.destroyAirplane(req.params.id);

        SuccessResponse.data = airplane;
        SuccessResponse.message="sucessfully able to delete the airplane";
        return res.status(status.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


async function updateAirplane(req,res){
    try {
        const airplane = await AirplaneService.updateAirplane(req.params.id,{
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        SuccessResponse.message = "sucessfully able to update the airplane";
        return res.status(status.OK).json(SuccessResponse);
    } catch (error) {
        // ErrorResponse.data = airplane;
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
module.exports ={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}