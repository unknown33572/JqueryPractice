let hotel = {
    name: 'Shin',
    rooms: 30,
    booked: 15,
    checkAvailability: function() {
        var freeRooms = this.rooms - this.booked;
        return freeRooms;
    }
};

let elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

let elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();