// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.

//create the div
var planetDiv = document.createElement("div");
//console.log(planetDiv);

//add the className "planet" to planetDiv
planetDiv.className = "planet";
console.log(planetDiv);


//change background color of .planet
planetDiv.style.backgroundColor = "#00ff00";

//append the planetDiv to the body in the DOM
document.body.appendChild(planetDiv);



// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.

//Create a new div of class "moon"
var moonDiv = document.createElement("div");
// console.log(moonDiv);

//add the className "moon" to moonDiv
moonDiv.className = "moon";
console.log(moonDiv);

//append the moonDiv to planetDiv
planetDiv.appendChild(moonDiv);
