const status = require('http-status');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if (!req.body.name) {
        ErrorResponse.message = 'Something went wrong while creating city';
        ErrorResponse.error = new AppError('name of city not found in correct form in incoming request', status.BAD_REQUEST);

        return res
            .status(status.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}