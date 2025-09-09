class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }

    async calculateFees(req, res) {
        try {
            const { vehicleId, duration } = req.body;
            const fees = await this.paymentService.calculateFees(vehicleId, duration);
            res.status(200).json({ fees });
        } catch (error) {
            res.status(500).json({ message: 'Error calculating fees', error: error.message });
        }
    }

    async processPayment(req, res) {
        try {
            const { vehicleId, amount } = req.body;
            const paymentRecord = await this.paymentService.processPayment(vehicleId, amount);
            res.status(201).json({ message: 'Payment processed successfully', paymentRecord });
        } catch (error) {
            res.status(500).json({ message: 'Error processing payment', error: error.message });
        }
    }

    async getPaymentRecords(req, res) {
        try {
            const records = await this.paymentService.getPaymentRecords();
            res.status(200).json(records);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving payment records', error: error.message });
        }
    }

        async getPaymentDetails(req, res) {
            const { id } = req.params;
            try {
                const payment = await this.paymentService.getPaymentDetails(id);
                if (!payment) {
                    return res.status(404).json({ message: 'Payment not found' });
                }
                res.status(200).json(payment);
            } catch (error) {
                res.status(500).json({ message: 'Error retrieving payment details', error: error.message });
            }
        }

        async getUserPayments(req, res) {
            const { userId } = req.params;
            try {
                const payments = await this.paymentService.getUserPayments(userId);
                res.status(200).json(payments);
            } catch (error) {
                res.status(500).json({ message: 'Error retrieving user payments', error: error.message });
            }
        }
}

module.exports = PaymentController;