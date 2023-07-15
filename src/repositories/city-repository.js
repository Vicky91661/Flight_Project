const CrudRepostory = require('./CRUD-repository');
const { City } = require('../models');

class CityRepository extends CrudRepostory {
    constructor() {
        super(City);
    }
}

module.exports = CityRepository;