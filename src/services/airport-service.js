const { AirportRepository } = require('../repositories');
const status = require('http-status');

const AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        const airport = await airportRepository.create(data);
        return airport;
    }
    catch (error) {
        console.log(error);
        if (error.name == 'SequelizeValidationError') {
            let explanation = [];

            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            //console.log(explanation);
            throw new AppError(explanation, status.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airport object', status.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports() {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    }
    catch (error) {
        throw new AppError('Cannot fetch data of all the Airports', status.INTERNAL_SERVER_ERROR);
    }

}

async function getAirport(id) {
    try {
        const airport = await airportRepository.get(id);
        return airport;
    }
    catch (error) {
        if (error.statusCode == status.NOT_FOUND) {
            throw new AppError('The airport you requested is not present', status.NOT_FOUND)
        }
        throw new AppError('Cannot fetch data of Airport', status.INTERNAL_SERVER_ERROR);
    }

}
async function destroyAirport(id) {
    try {
        const response = await airportRepository.destroy(id);
        return response;
    }
    catch (error) {
        if (error.statusCode == status.NOT_FOUND) {
            throw new AppError('The Airport you requested to delete is not present', status.NOT_FOUND)
        }
        throw new AppError('Cannot delete the Airport', status.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id, data) {
    try {
        const response = await airportRepository.update(id, data);
        return response;
    } catch (error) {
        if (error.statusCode == status.NOT_FOUND) {
            throw new AppError('The Airport you requested to update is not present', status.NOT_FOUND)
        }
        throw new AppError('Cannot update the Airport', status.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}