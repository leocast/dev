var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();


////////////////////////////////////////////////////////////////////////
//create new AJAX Request Object to list availbility of rooms in office/
////////////////////////////////////////////////////////////////////////
//create the XMLHttpRequest Object
var roomRequest = new XMLHttpRequest();
//create the callback function
roomRequest.onreadystatechange = function() {
  if(roomRequest.readyState === 4 && roomRequest.status === 200) {
    //parse the response from server, then start building HTML from the JSON object
    var roomObj = JSON.parse(roomRequest.responseText);
    //open the ul tag
    var statusHTML = "<ul class='rooms'>";
    //create a new HTML list item
    for (var i = 0; i < roomObj.length; i += 1){
      //check the "available" property
      if (roomObj[i].available === true){
        statusHTML += "<li class='empty'>";
      } else {
        statusHTML += "<li class='full'>";
      }
      //get the value for the "room" property;
      statusHTML += roomObj[i].room;
      //close the <li> tag
      statusHTML += "</li>";
    }
    //close the ul tag
    statusHTML += "</ul>";
    //add the newly minted HTML to the #roomList
    document.getElementById("roomList").innerHTML = statusHTML;
  }
};
//open the request
roomRequest.open("GET", "data/rooms.json");
//send the request
roomRequest.send();


