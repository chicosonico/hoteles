
hotelList = [];

class Hotel {
    constructor(name, room, floor, area) {
      this.name = name;
      this.room = room;
      this.floor = floor;
      this.area = area;
    }

    get getName() {
        return this.name;
    }
    get getRoom() {
        return this.room;
    }
    get getFloor() {
        return this.floor;
    }
    get getArea() {
        return this.area;
    }

   

    set setName(x) {
        this.name = x;
      }

    set setRoom(x) {
        this.room = x;
      }

    set setFloor(x) {
        this.floor = x;
      }

    set setArea(x) {
        this.area = x;
      }  

  }

  function createHotel(){

   let nameInput = document.getElementById("hotelNameInput").value;
   let roomsInput = document.getElementById("roomsInput").value;
   let floorsInput = document.getElementById("floorsInput").value;
   let areaInput = document.getElementById("areaInput").value;

   newHotel = new Hotel(nameInput, roomsInput, floorsInput, areaInput);

   hotelList.push(newHotel);
   console.log(hotelList);

  }