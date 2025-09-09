class VehicleController {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
    }

    async checkIn(req, res) {
        try {
            const vehicleData = req.body;
            const ticket = await this.vehicleService.checkIn(vehicleData);
            res.status(201).json({ ticket });
        } catch (error) {
            res.status(500).json({ message: 'Error during vehicle check-in', error: error.message });
        }
    }

    async checkOut(req, res) {
        try {
            const { ticketId } = req.params;
            const result = await this.vehicleService.checkOut(ticketId);
            res.status(200).json({ message: 'Vehicle checked out successfully', result });
        } catch (error) {
            res.status(500).json({ message: 'Error during vehicle check-out', error: error.message });
        }
    }

    async generateTicket(req, res) {
        try {
            const vehicleData = req.body;
            const ticket = await this.vehicleService.generateTicket(vehicleData);
            res.status(201).json({ ticket });
        } catch (error) {
            res.status(500).json({ message: 'Error generating ticket', error: error.message });
        }
    }
}

module.exports = VehicleController;