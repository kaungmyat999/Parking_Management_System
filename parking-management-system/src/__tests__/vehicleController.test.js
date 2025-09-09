const assert = require('assert');
const vehicleController = require('../vehicleController');

describe('Vehicle Controller', () => {
    it('should register a vehicle', () => {
        const vehicleData = { licensePlate: 'ABC123', model: 'Toyota' };
        const result = vehicleController.registerVehicle(vehicleData);
        assert.strictEqual(result.success, true);
        assert.strictEqual(result.message, 'Vehicle registered successfully');
    });

    it('should retrieve a vehicle by license plate', () => {
        const licensePlate = 'ABC123';
        const result = vehicleController.getVehicle(licensePlate);
        assert.strictEqual(result.success, true);
        assert.strictEqual(result.data.licensePlate, licensePlate);
    });
});