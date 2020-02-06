
hotelList = [];

 class Hotel {
    constructor(name, room, floor, area) {
      this._name = name;
      this._room = room;
      this._floor = floor;
      this._area = area;
    }

    get getName() {
        return this._name;
    }
    get getRoom() {
        return this._room;
    }
    get getFloor() {
        return this._floor;
    }
    get getArea() {
        return this._area;
    }

   

    set setName(editName) {
        this.name = editName;
      }

    set setRoom(editRoom) {
        this.room = editRoom;
      }

    set setFloor(editFloor) {
        this.floor = editFloor;
      }

    set setArea(editArea) {
        this.area = editArea;
      }  

      
      calMaintenance(){
        let workers = 0;

        if(this._room <= 20){
          workers = 1;
          cost = 1500;
          return cost;
        }else{
          workers = this._room /20;
          cost = workers * 1500; 
          return cost;     
        }
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

  function getHotel(){
    let nameSearch = document.getElementById("hotelNameSearch").value;
    var exist=false;
    for (i=0; i <= hotelList.length; i++) {
        if(nameSearch == hotelList[i].getName){
          console.log("Hola");
            exist = true;
            console.log(exist);
            document.getElementById("viewRooms").innerHTML = hotelList[i].getRoom  ;
            document.getElementById("viewFloors").innerHTML = hotelList[i].getFloor ;
            document.getElementById("viewArea").innerHTML = hotelList[i].getArea;
            document.getElementById("viewMaintenance").innerHTML = hotelList[i].calMaintenance().value;

      
        }
    } 
   
}
