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

module.exports = {
    createCity
};