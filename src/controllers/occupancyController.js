class OccupancyController {
    constructor(slotModel) {
        this.slotModel = slotModel;
    }

    async getLiveOccupancy(req, res) {
        try {
            const occupancyData = await this.slotModel.find({});
            const totalSlots = occupancyData.length;
            const occupiedSlots = occupancyData.filter(slot => slot.isOccupied).length;
            const availableSlots = totalSlots - occupiedSlots;

            res.status(200).json({
                totalSlots,
                occupiedSlots,
                availableSlots
            });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving occupancy data', error });
        }
    }
    async getOccupancyByFloor(req, res) {
        try {
            const { floorId } = req.params;
            const occupancyData = await this.slotModel.find({ floorId });
            const totalSlots = occupancyData.length;
            const occupiedSlots = occupancyData.filter(slot => slot.isOccupied).length;
            const availableSlots = totalSlots - occupiedSlots;

            res.status(200).json({
                floorId,
                totalSlots,
                occupiedSlots,
                availableSlots
            });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving occupancy data for floor', error });
        }
    }
}

module.exports = OccupancyController;