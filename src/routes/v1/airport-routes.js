const express = require('express');
const router = express.Router();

const { AirportController } = require('../../controllers');
const { AirportMiddlewares } = require('../../middlewares');

// /api/v1/airplanes POST
router.post('/', AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport);


// /api/v1/airplanes GET
router.get('/', AirportController.getAirport);

// /api/v1/airplanes/:id GET
router.get('/:id', AirportController.getAirport);

// /api/v1/airplanes DELETE
router.delete('/:id', AirportController.destroyAirport);


// /api/v1/airplanes/:id PATCH
router.patch('/:id', AirportController.updateAirport);

module.exports = router;


