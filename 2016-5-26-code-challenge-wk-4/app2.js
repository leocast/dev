// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.

//create the div
var planetDiv = document.createElement("div");
//console.log(planetDiv);

//add the className "planet" to planetDiv
planetDiv.className = "planet";
console.log(planetDiv);


//change background color of .planet
planetDiv.style.background = "radial-gradient(circle farthest-side at 75px 85px, red, orange)";

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



{
  background: red; /* For browsers that do not support gradients */
  background: -webkit-radial-gradient(circle, red, yellow, green); /* Safari */
  background: -o-radial-gradient(circle, red, yellow, green); /* Opera 11.6 to 12.0 */
  background: -moz-radial-gradient(circle, red, yellow, green); /* Firefox 3.6 to 15 */
  background: radial-gradient(circle, red, yellow, green); /* Standard syntax */
}