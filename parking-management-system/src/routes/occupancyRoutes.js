const express = require('express');
const OccupancyController = require('../controllers/occupancyController');

const setOccupancyRoutes = (app) => {
    const occupancyController = new OccupancyController();

    app.get('/api/occupancy', occupancyController.getLiveOccupancy.bind(occupancyController));
    app.get('/api/occupancy/:floorId', occupancyController.getOccupancyByFloor.bind(occupancyController));
};

module.exports = setOccupancyRoutes;