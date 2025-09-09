const express = require('express');
const PaymentController = require('../controllers/paymentController');

const setPaymentRoutes = (app) => {
    const paymentController = new PaymentController();

    app.post('/api/payments', paymentController.processPayment);
    app.get('/api/payments/:id', paymentController.getPaymentDetails);
    app.get('/api/payments/user/:userId', paymentController.getUserPayments);
};

module.exports = setPaymentRoutes;