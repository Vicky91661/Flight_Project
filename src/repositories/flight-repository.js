const CrudRepostory = require('./CRUD-repository');
const { Flight,Airplane,Airport,City } = require('../models');
const {Op , Sequelize}=require('sequelize');
class FlightRepository extends CrudRepostory {
    constructor() {
        super(Flight);
    }
    async getAllFlights(filter,sort)
    {
        const response = await Flight.findAll({
            where:filter,
            order:sort,
            include:
            [
                {
                    model:Airplane,
                    require:true,
                    as:'airplane_detail'
                },
                {
                    model:Airport,
                    require:true,
                    as: 'departureAirport_detail',
                    on:
                    {
                        col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport_detail.code"))
                        
                    },
                    include:{
                        model:City,
                        require:true
                    }
                },
                    {
                        model: Airport,
                        require: true,
                        as: 'arrivalAirport_detail',
                        on:
                        {
                            col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport_detail.code"))

                        },
                        include: {
                            model: City,
                            require: true
                        }
                    }
            ]
        });
        return response;
    }
}

module.exports = FlightRepository;