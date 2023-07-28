const express = require('express');
const router = express.Router();

const { FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');

// /api/v1/flights POST
router.post('/', FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight);

// /api/v1/airplanes GET
router.get('/', FlightController.getAllFlights);

router.get('/:id', FlightController.getFlight);


router.patch('/:id/seats', FlightMiddlewares.validateUpdateSeatsRequest,
    FlightController.updateSeats);

module.exports = router;


