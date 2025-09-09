class SlotController {
    constructor(slotService) {
        this.slotService = slotService;
    }

    async getAvailableSlots(req, res) {
        try {
            const availableSlots = await this.slotService.findAvailableSlots();
            res.status(200).json(availableSlots);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving available slots', error });
        }
    }

    async assignSlot(req, res) {
        const { vehicleId, floorId } = req.body;
        try {
            const assignedSlot = await this.slotService.assignSlot(vehicleId, floorId);
            res.status(201).json(assignedSlot);
        } catch (error) {
            res.status(500).json({ message: 'Error assigning slot', error });
        }
    }

    async releaseSlot(req, res) {
        const { slotId } = req.params;
        try {
            await this.slotService.releaseSlot(slotId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error releasing slot', error });
        }
    }

    async getSlotDetails(req, res) {
        const { slotId } = req.params;
        try {
            const slotDetails = await this.slotService.getSlotDetails(slotId);
            res.status(200).json(slotDetails);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving slot details', error });
        }
    }

        async getSlotById(req, res) {
            const { id } = req.params;
            try {
                const slot = await this.slotService.getSlotById(id);
                if (!slot) {
                    return res.status(404).json({ message: 'Slot not found' });
                }
                res.status(200).json(slot);
            } catch (error) {
                res.status(500).json({ message: 'Error retrieving slot', error });
            }
        }

        async updateSlot(req, res) {
            const { id } = req.params;
            try {
                const updatedSlot = await this.slotService.updateSlot(id, req.body);
                if (!updatedSlot) {
                    return res.status(404).json({ message: 'Slot not found' });
                }
                res.status(200).json(updatedSlot);
            } catch (error) {
                res.status(500).json({ message: 'Error updating slot', error });
            }
        }

        async deleteSlot(req, res) {
            const { id } = req.params;
            try {
                const deleted = await this.slotService.deleteSlot(id);
                if (!deleted) {
                    return res.status(404).json({ message: 'Slot not found' });
                }
                res.status(204).send();
            } catch (error) {
                res.status(500).json({ message: 'Error deleting slot', error });
            }
        }
}

module.exports = SlotController;