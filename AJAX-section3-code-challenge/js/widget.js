$(document).ready(function () {
  $.getJSON('data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); // end getJSON

  //add a second $.getJSON() with the url "data/rooms.json"
  $.getJSON('data/rooms.json', function (data) {
  //create the html and begin adding the returned data
    var statusHTML = "<ul class='rooms'>";
    //loop through the returned JSON object
    $.each(data, function (index, rooms){
      if (rooms.available === true){
        statusHTML += "<li class='empty'>";
      }else {
        statusHTML += "<li class='full'>";
      }
      //get the value for the "room" property
      statusHTML += rooms.room + "</li>";
    });//end each loop
    //close the <ul>
    statusHTML += "</ul>";
  //add the requested html to "#roomList"
  $("#roomList").html(statusHTML);
  });//end the second getJSON request 
}); // end ready