const status = require('http-status');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if (!req.body.name) {
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error = new AppError('name of airport not found in correct form in incoming request', status.BAD_REQUEST);

        return res
            .status(status.BAD_REQUEST)
            .json(ErrorResponse);
    } 
    if (!req.body.code) {
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error = new AppError('code of airport not found in correct form in incoming request', status.BAD_REQUEST);

        return res
            .status(status.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.cityId) {
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error = new AppError('cityId of airport not found in correct form in incoming request', status.BAD_REQUEST);

        return res
            .status(status.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}