const assert = require('assert');
const slotAssignmentService = require('../slotAssignmentService');

describe('Slot Assignment Service', () => {
    it('should assign a slot when available', () => {
        const result = slotAssignmentService.assignSlot('vehicleId1');
        assert.strictEqual(result.success, true);
        assert.strictEqual(result.slotId, 'slotId1');
    });

    it('should not assign a slot when none are available', () => {
        const result = slotAssignmentService.assignSlot('vehicleId2');
        assert.strictEqual(result.success, false);
        assert.strictEqual(result.message, 'No slots available');
    });
});