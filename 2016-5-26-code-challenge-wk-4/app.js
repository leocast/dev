// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.

//create the div
var planetDiv = document.createElement("div");
//console.log(planetDiv);

//add the className "planet" to planetDiv
planetDiv.className = "planet";
//change background color of .
	//select the class .planet

	//var planetStyle = planetDiv.querySelector("style[type='text/css']");
	planetDiv.innerText = "background-color: #00ff00;";
	console.log(planetDiv);

//append the planetDiv to the body in the DOM
 
document.body.appendChild(planetDiv);
console.log(planetDiv);


// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.


//	
	// planetDiv.innerText = "background-color: #00ff00;";
	// console.log(planetDiv);