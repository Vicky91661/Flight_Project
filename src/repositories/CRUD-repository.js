const {logger} = require('../config');

class CrudRepostory{
    constructor(model){
        this.model = model;
    }
    async create(data)
    {
        try{
            const response = await this.model.create(data);
            return response;
        }
        catch(error)
        {
            logger.error('Something went wrong in the crud Repo : Create');
            throw error;
        }
    }
    async destroy(data)
    {
        try{
            const response = await this.model.destroy({
                where : {
                    id : data
                }
            });
            return response;
        }
        catch(error)
        {
            logger.error('Something went wrong in the crud Repo : Delete');
            throw error;
        }
    }
    async get(data)
    {
        try{
            const response = await this.model.findByPk(data);
            return response;
        }
        catch(error)
        {
            logger.error('Somthing went wrong in the crud Repo : get');
            throw error;
        }
    }
    async getAll()
    {
        try{
            const response = await this.model.findAll();
            return response;
        }
        catch(error)
        {
            logger.error('Somthing went wrong in the crud Repo : findAll');
            throw error;
        }
    }
    async update(id,data) //data->{col:value,..}  #Data is an object value
    {
        try{
            const response = await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return response;
        }
        catch(error)
        {
            logger.error('Somthing went wrong in the crud Repo : Update');
            throw error;
        }
    }

}


module.exports = CrudRepostory;