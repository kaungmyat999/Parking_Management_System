const occupancyController = require('../occupancyController');
const assert = require('assert');

describe('Occupancy Controller', () => {
    it('should retrieve occupancy status', async () => {
        const status = await occupancyController.getOccupancyStatus();
        assert.strictEqual(status, 'expected status');
    });

    it('should update occupancy status', async () => {
        const result = await occupancyController.updateOccupancyStatus('new status');
        assert.strictEqual(result, 'status updated');
    });
});