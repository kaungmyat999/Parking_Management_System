class SlotAssignmentService {
    constructor(slotModel) {
        this.slotModel = slotModel;
    }

    async assignSlot(vehicle) {
        try {
            const availableSlot = await this.slotModel.findOne({ isAvailable: true }).sort({ createdAt: 1 });
            if (!availableSlot) {
                throw new Error('No available slots');
            }
            availableSlot.isAvailable = false;
            availableSlot.vehicleId = vehicle._id;
            await availableSlot.save();
            return availableSlot;
        } catch (error) {
            throw new Error(`Slot assignment failed: ${error.message}`);
        }
    }

    async releaseSlot(slotId) {
        try {
            const slot = await this.slotModel.findById(slotId);
            if (!slot) {
                throw new Error('Slot not found');
            }
            slot.isAvailable = true;
            slot.vehicleId = null;
            await slot.save();
            return slot;
        } catch (error) {
            throw new Error(`Slot release failed: ${error.message}`);
        }
    }

    async getAvailableSlots() {
        try {
            return await this.slotModel.find({ isAvailable: true });
        } catch (error) {
            throw new Error(`Failed to retrieve available slots: ${error.message}`);
        }
    }
}

module.exports = SlotAssignmentService;