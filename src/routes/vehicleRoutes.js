const express = require('express');
const VehicleController = require('../controllers/vehicleController');

const setVehicleRoutes = (app) => {
    const router = express.Router();
    const vehicleController = new VehicleController();

    router.post('/checkin', vehicleController.checkIn);
    router.post('/checkout', vehicleController.checkOut);
    router.get('/ticket/:id', vehicleController.generateTicket);

    app.use('/api/vehicles', router);
};

module.exports = setVehicleRoutes;