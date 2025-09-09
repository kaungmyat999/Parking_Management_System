const assert = require('assert');
const payment = require('../payment');

describe('Payment Module', () => {
    it('should process payment correctly', () => {
        const result = payment.processPayment(100);
        assert.strictEqual(result.status, 'success');
        assert.strictEqual(result.amount, 100);
    });

    it('should retrieve payment status', () => {
        const result = payment.getPaymentStatus(1);
        assert.strictEqual(result.status, 'completed');
    });
});