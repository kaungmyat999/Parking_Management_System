const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const errorHandler = require('./middlewares/errorHandler');
const setVehicleRoutes  = require('./routes/vehicleRoutes');
const setOccupancyRoutes = require('./routes/occupancyRoutes');
const setSlotRoutes  = require('./routes/slotRoutes');
const setPaymentRoutes = require('./routes/paymentRoutes');
const setAuthRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
setVehicleRoutes(app);
setOccupancyRoutes(app);
setSlotRoutes(app);
setPaymentRoutes(app);
setAuthRoutes(app);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});