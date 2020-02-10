
hotelList = []; 
var numbers = /^[0-9]+$/;

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
        this._name = editName;
      }

    set setRoom(editRoom) {
        this._room = editRoom;
      }

    set setFloor(editFloor) {
        this._floor = editFloor;
      }

    set setArea(editArea) {
        this._area = editArea;
      }  

      
      calMaintenance(){
        var workers = 0;
        var roomCost = parseInt(this._room);
        var cost;
        if(roomCost <= 20){
          workers = 1;
          cost = 1500;
          return cost;
          
        }else{
          workers = Math.ceil(roomCost /20);// match workers to rooms
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

   if(roomsInput.match(numbers) && floorsInput.match(numbers) && areaInput.match(numbers)){
    nameInput = nameInput.toUpperCase();

    newHotel = new Hotel(nameInput, roomsInput, floorsInput, areaInput);
 
    hotelList.push(newHotel);
    console.log(hotelList);
    $(':input').val(''); // clean input fields from bootstrap modal

   }else{
    alert('Please input numeric characters only at Rooms, Floors and Area fields');
   }
       

  }

  function getHotel(){
    let nameSearch = document.getElementById("hotelNameSearch").value;
    nameSearch = nameSearch.toUpperCase();
   
    for (i=0; i < hotelList.length; i++) {
        if(nameSearch == hotelList[i].getName){
            
            document.getElementById("viewHotel").innerHTML = hotelList[i].getName  ;
            document.getElementById("viewRooms").innerHTML = hotelList[i].getRoom  ;
            document.getElementById("viewFloors").innerHTML = hotelList[i].getFloor ;
            document.getElementById("viewArea").innerHTML = hotelList[i].getArea;
            document.getElementById("viewMaintenance").innerHTML = "This hotel needs a maintenance of " + 
            hotelList[i].calMaintenance() + "€ per month." ;
            // document.getElementById("viewMaintenance").innerHTML = "This hotel needs "+ hotelList[i].calMaintenance().value.workers + "workers, with a cost of " + 
            // hotelList[i].calMaintenance().value.cost + "€.";
            $(':input').val(''); // clean input fields from bootstrap modal
        }
    } 
   
}

function deleteHotel(){
  var nameEdit = document.getElementById("hotelNameEdit").value;
  nameEdit = nameEdit.toUpperCase();
// better do while -- faster
  for (i=0; i <= hotelList.length; i++) {
    if(nameEdit == hotelList[i].getName){
      hotelList.splice(i);
        console.log(hotelList);
        $(':input').val('');// clean input fields from bootstrap modal
    }
} 



}

function editHotel(){

  let nameEdit = document.getElementById("hotelNameEdit").value;
  nameEdit = nameEdit.toUpperCase();
  
    for (i=0; i < hotelList.length; i++) {
        if(nameEdit == hotelList[i].getName){
          if (document.getElementById("editRooms").value == ""){//validate empty fields to avoid overwrite right values

          }else{
          hotelList[i].setRoom = document.getElementById("editRooms").value  ;
          }

          if(document.getElementById("editFloors").value == ""){

          }else{
            hotelList[i].setFloor = document.getElementById("editFloors").value ;
          }
          if(document.getElementById("editArea").value == ""){

          }else{
            hotelList[i].setArea = document.getElementById("editArea").value;
          }
          
            
            $(':input').val(''); // clean input fields from bootstrap modal
            console.log(hotelList);
        }
    } 



}
