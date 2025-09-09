const assert = require('assert');
const paymentController = require('../paymentController');

describe('Payment Controller', () => {
    it('should process payment correctly', async () => {
        const paymentData = { amount: 100, method: 'credit_card' };
        const result = await paymentController.processPayment(paymentData);
        assert.strictEqual(result.status, 'success');
    });

    it('should retrieve payment details correctly', async () => {
        const paymentId = '12345';
        const result = await paymentController.getPaymentDetails(paymentId);
        assert.strictEqual(result.id, paymentId);
    });
});