const assert = require('assert');
test('floor module functionality', () => {
	assert.strictEqual(typeof floorFunction, 'function');
	assert.strictEqual(floorFunction('input'), 'expectedOutput');
});