
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

module.exports = {
    createCity
}