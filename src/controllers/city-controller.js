
const status = require('http-status');
const { CityService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /cities
 * req-body {name:'London'}
 * */

async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = city;
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
async function getCities(req, res) {
    try {
        const cities = await CityService.getCities();
        SuccessResponse.data = cities;
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
async function getCity(req, res) {
    try {
        const city = await CityService.getCity(req.params.id);

        SuccessResponse.data = city;
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

async function destroyCity(req, res) {
    try {
        const city = await CityService.destroyCity(req.params.id);

        SuccessResponse.data = city;
        SuccessResponse.message = "sucessfully able to delete the airplane";
        return res.status(status.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


async function updateCity(req, res) {
    try {
        const name = await CityService.updateCity(req.params.id, {
            name: req.body.name
        });
        SuccessResponse.data = name;
        SuccessResponse.message = "sucessfully able to update the name of city";
        return res.status(status.OK).json(SuccessResponse);
    } catch (error) {
        // ErrorResponse.data = airplane;
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createCity,
    getCities,
    getCity,
    destroyCity,
    updateCity
}