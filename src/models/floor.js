const mongoose = require('mongoose');

const floorSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
        unique: true
    },
    totalSlots: {
        type: Number,
        required: true
    },
    availableSlots: {
        type: Number,
        required: true
    },
    occupiedSlots: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Floor = mongoose.model('Floor', floorSchema);

module.exports = Floor;