
const status = require('http-status');
const { FlightService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /flights
 * req-body {flightNumber : 'airbus320', airplaneId : 200,departureAirportId,arrivalAirportId
 * arrivalTime,departureTime,price,boardingGate,totalSeat}
 * */

async function createFlight(req, res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalSeat:req.body.totalSeat
        });
        SuccessResponse.data = flight;
        return res.status(status.CREATED).json(SuccessResponse);

    }
    catch (error) {
        //ErrorResponse.message = 'something went wrong while creating airplane';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAllFlights(req,res)
{
    console.log(req.query);
    try {
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
        return res.status(status.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getFlight(req, res) {
    try {
        const flight = await FlightService.getFlight(req.params.id);

        SuccessResponse.data = flight;
        return res.status(status.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateSeats(req, res) {
    try {
        const response = await FlightService.updateSeats({
            flightId:req.params.id,
            seats:req.body.seats,
            dec:req.body.dec
        });

        SuccessResponse.data = response;
        return res.status(status.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
}