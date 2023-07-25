const CrudRepostory = require('./CRUD-repository');
const { Airport } = require('../models');

class AirportRepository extends CrudRepostory {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRepository;