const express = require('express');
const router = express.Router();

const { FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');

// /api/v1/flights POST
router.post('/', FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight);

// /api/v1/airplanes GET
router.get('/', FlightController.getAllFlights);


module.exports = router;


