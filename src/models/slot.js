class Slot {
    constructor(id, floor, isOccupied = false, vehicleId = null) {
        this.id = id;
        this.floor = floor;
        this.isOccupied = isOccupied;
        this.vehicleId = vehicleId;
    }

    checkIn(vehicleId) {
        this.isOccupied = true;
        this.vehicleId = vehicleId;
    }

    checkOut() {
        this.isOccupied = false;
        this.vehicleId = null;
    }
}

module.exports = Slot;