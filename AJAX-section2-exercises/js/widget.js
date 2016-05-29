var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {
		//parse the response from server, then start building HTML from the JSON object
		var employees = JSON.parse(xhr.responseText);
		//open the ul tag
		var statusHTML = "<ul class='bulleted'>";
		//create a new HTML list item
		for (var i = 0; i < employees.length; i += 1){
			//check the "inoffice" property
			if (employees[i].inoffice === true){
				statusHTML += "<li class='in'>";
			} else {
				statusHTML += "<li class='out'>";
			}
			//get the value for the "name" property;
			statusHTML += employees[i].name;
			//close the <li> tag
			statusHTML += "</li>";
		}
		//close the ul tag
		statusHTML += "</ul>";
		//add the newly minted HTML to the #employeeList
		document.getElementById("employeeList").innerHTML = statusHTML;
	}
};
xhr.open("GET", "data/employees.json");
xhr.send();

//create new AJAX Request Object to list availbility of rooms in office




