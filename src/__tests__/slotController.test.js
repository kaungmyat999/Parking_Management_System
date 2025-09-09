const assert = require('assert');
const slotController = require('../slotController');

describe('Slot Controller', () => {
    it('should check slot availability', () => {
        const available = slotController.checkAvailability();
        assert.strictEqual(available, true);
    });

    it('should reserve a slot', () => {
        const result = slotController.reserveSlot('slot1');
        assert.strictEqual(result, 'Slot reserved successfully');
    });

    it('should return an error for reserving an already reserved slot', () => {
        slotController.reserveSlot('slot1');
        const result = slotController.reserveSlot('slot1');
        assert.strictEqual(result, 'Slot is already reserved');
    });
});