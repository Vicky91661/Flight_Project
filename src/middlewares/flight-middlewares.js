const status = require('http-status');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if (!req.body.flightNumber) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError('flightNumber of airport not found in correct form in incoming request', status.BAD_REQUEST);

        return res
            .status(status.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.airplaneId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError('airplaneId of flight not found in correct form in incoming request', status.BAD_REQUEST);

        return res
            .status(status.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.departureAirportId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError('departureAirportId of flight not found in correct form in incoming request', status.BAD_REQUEST);

        return res
            .status(status.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.arrivalAirportId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError('arrivalAirportId of flight not found in correct form in incoming request', status.BAD_REQUEST);

        return res
            .status(status.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.arrivalTime) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError('arrivalTime of flight not found in correct form in incoming request', status.BAD_REQUEST);

        return res
            .status(status.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.departureTime) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError('departureTime of flight not found in correct form in incoming request', status.BAD_REQUEST);

        return res
            .status(status.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.price) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError('price of flight not found in correct form in incoming request', status.BAD_REQUEST);

        return res
            .status(status.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (req.body.price<0) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError('price of flight should be positive', status.BAD_REQUEST);

        return res
            .status(status.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.totalSeat) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError('totalSeat of flight not found in correct form in incoming request', status.BAD_REQUEST);

        return res
            .status(status.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}

function validateUpdateSeatsRequest(req,res,next)
{
    if (!req.body.seats) {
        ErrorResponse.message = 'Something went wrong while Updating flight';
        ErrorResponse.error = new AppError('seats of flight not found in correct form in incoming request', status.BAD_REQUEST);

        return res
            .status(status.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next()
}

module.exports = {
    validateCreateRequest,
    validateUpdateSeatsRequest
}