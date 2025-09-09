const assert = require('assert');
const errorHandler = require('../errorHandler');

test('should format error response correctly', () => {
	const error = { message: 'Not Found', status: 404 };
	const response = errorHandler(error);
	assert.strictEqual(response.status, 404);
	assert.strictEqual(response.message, 'Not Found');
});

test('should handle generic errors', () => {
	const error = new Error('Something went wrong');
	const response = errorHandler(error);
	assert.strictEqual(response.status, 500);
	assert.strictEqual(response.message, 'Internal Server Error');
});