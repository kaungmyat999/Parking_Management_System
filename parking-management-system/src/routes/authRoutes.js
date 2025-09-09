const express = require('express');
const AuthController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();
const authController = new AuthController();

function setAuthRoutes(app) {
    router.post('/register', authController.register);
    router.post('/login', authController.login);
    router.get('/profile', authMiddleware.verifyToken, authController.getProfile);
    router.put('/update', authMiddleware.verifyToken, authController.updateProfile);
    router.delete('/delete', authMiddleware.verifyToken, authController.deleteUser);

    app.use('/api/auth', router);
}

module.exports = setAuthRoutes;