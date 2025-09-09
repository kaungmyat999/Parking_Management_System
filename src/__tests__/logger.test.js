const assert = require('assert');
test('logger should log messages correctly', () => {
    const logger = require('../logger');
    const message = 'Test log message';
    logger.log(message);
    assert.strictEqual(logger.getLastLog(), message);
});