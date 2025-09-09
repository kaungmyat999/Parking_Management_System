const express = require('express');
const SlotController = require('../controllers/slotController');
const SlotService = require('../services/slotAssignmentService');

const router = express.Router();
const slotService = new SlotService();
const slotController = new SlotController(slotService);

function setSlotRoutes(app) {
    router.post('/assign', slotController.assignSlot);
    router.get('/available', slotController.getAvailableSlots);
    router.get('/:id', slotController.getSlotById);
    router.put('/:id', slotController.updateSlot);
    router.delete('/:id', slotController.deleteSlot);

    app.use('/api/slots', router);
}

module.exports = setSlotRoutes;

