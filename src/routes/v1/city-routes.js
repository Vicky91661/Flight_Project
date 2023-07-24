const express = require('express');
const router = express.Router();

const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');


router.post('/', CityMiddlewares.validateCreateRequest,
CityController.createCity);


// /api/v1/cities GET
router.get('/', CityController.getCities);

// /api/v1/airplanes/:id GET
router.get('/:id', CityController.getCity);

// /api/v1/airplanes DELETE
router.delete('/:id', CityController.destroyCity);


// /api/v1/airplanes/:id PATCH
router.patch('/:id', CityController.updateCity);


module.exports = router;