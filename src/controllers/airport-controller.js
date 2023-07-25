
const status = require('http-status');
const { AirportService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /airplanes
 * req-body {modelNumber : 'airbus320', capacity : 200}
 * */

async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        SuccessResponse.data = airport;
        return res.status(status.CREATED).json(SuccessResponse);

    }
    catch (error) {
        //ErrorResponse.message = 'something went wrong while creating airplane';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET : /airplanes
 * req-body {}
 * */
async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res.status(status.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }

}
/**
 * GET : /airplane/:id
 * req-body {}
 * */
async function getAirport(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);

        SuccessResponse.data = airport;
        return res.status(status.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


/**
 * DELETE : /airplane/:id
 * req-body {}
 * */

async function destroyAirport(req, res) {
    try {
        const airport = await AirportService.destroyAirport(req.params.id);

        SuccessResponse.data = airport;
        SuccessResponse.message = "sucessfully able to delete the airport";
        return res.status(status.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


async function updateAirport(req, res) {
    try {
        const airport = await AirportService.updateAirplane(req.params.id, {
            name: req.body.name
        });
        SuccessResponse.data = airport;
        SuccessResponse.message = "sucessfully able to update the name of airport";
        return res.status(status.OK).json(SuccessResponse);
    } catch (error) {
        // ErrorResponse.data = airplane;
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}