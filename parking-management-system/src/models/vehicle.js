class Vehicle {
    constructor(licensePlate, vehicleType, checkInTime, checkOutTime = null) {
        this.licensePlate = licensePlate;
        this.vehicleType = vehicleType;
        this.checkInTime = checkInTime;
        this.checkOutTime = checkOutTime;
    }

    checkOut(time) {
        this.checkOutTime = time;
    }

    getDuration() {
        if (!this.checkOutTime) {
            throw new Error("Vehicle has not checked out yet.");
        }
        return (new Date(this.checkOutTime) - new Date(this.checkInTime)) / 1000; // duration in seconds
    }
}

module.exports = Vehicle;