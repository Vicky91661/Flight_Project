const {AirplaneRepository} =require('../repositories');
const status = require('http-status');

const AppError =require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        console.log(error);
        if(error.name == 'SequelizeValidationError')
        {
            let explanation =[];

            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            //console.log(explanation);
            throw new AppError(explanation,status.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airplane object',status.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes()
{
    try{
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    }
    catch(error){
        throw new AppError('Cannot fetch data of all the Airplanes', status.INTERNAL_SERVER_ERROR);
    }

}

async function getAirplane(id) {
    try {
        const airplanes = await airplaneRepository.get(id);
        return airplanes;
    }
    catch (error) {
        if (error.statusCode == status.NOT_FOUND)
        {
            throw new AppError('The airplane you requested is not present', status.NOT_FOUND)
        }
        throw new AppError('Cannot fetch data of all the Airplanes', status.INTERNAL_SERVER_ERROR);
    }

}
async function destroyAirplane(id)
{
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    }
    catch (error) {
        if (error.statusCode == status.NOT_FOUND) {
            throw new AppError('The airplane you requested to delete is not present', status.NOT_FOUND)
        }
        throw new AppError('Cannot delete the Airplane', status.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id,data)
{
    try {
        const response = await airplaneRepository.update(id,data);
        return response;
    } catch (error) {
        if (error.statusCode == status.NOT_FOUND) {
            throw new AppError('The airplane you requested to update is not present', status.NOT_FOUND)
        }
        throw new AppError('Cannot update the Airplane', status.INTERNAL_SERVER_ERROR);
    }
}

module.exports ={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}