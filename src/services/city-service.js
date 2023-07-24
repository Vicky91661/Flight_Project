const { CityRepository } = require('../repositories');
const status = require('http-status');

const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();

async function createCity(data)
{
    try {
        const city = await cityRepository.create(data);
        return city;
    }
    catch (error) {
        //console.log(error);
            if (error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];

            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            //console.log(explanation);
            throw new AppError(explanation, status.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object', status.INTERNAL_SERVER_ERROR);
    }
}

async function getCities() {
    try {
        const cities = await cityRepository.getAll();
        return cities;
    }
    catch (error) {
         
        throw new AppError('Cannot fetch data of all the cities', status.INTERNAL_SERVER_ERROR);
    }

}

async function getCity(id) {
    try {
        const city = await cityRepository.get(id);
        return city;
    }
    catch (error) {
        if (error.statusCode == status.NOT_FOUND) {
            throw new AppError('The city you requested is not present', status.NOT_FOUND)
        }
        throw new AppError('Cannot fetch data of all the cities', status.INTERNAL_SERVER_ERROR);
    }

}
async function destroyCity(id) {
    try {
        const response = await cityRepository.destroy(id);
        return response;
    }
    catch (error) {
        if (error.statusCode == status.NOT_FOUND) {
            throw new AppError('The city you requested to delete is not present', status.NOT_FOUND)
        }
        throw new AppError('Cannot delete the city', status.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(id, data) {
    try {
        const response = await cityRepository.update(id, data);
        return response;
    } catch (error) {
        
        if (error.statusCode == status.NOT_FOUND) {
            throw new AppError('The city you requested to update is not present', status.NOT_FOUND)
        }
        throw new AppError('Cannot update the city', status.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCity,
    getCities,
    updateCity, 
    destroyCity,
    getCity

};