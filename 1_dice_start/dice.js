// var dice = {
// 	sides : 6,
// 	roll : function() {
//   		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//   		return randomNumber;
// 	}
// }



function Dice(sides){
	this.sides = sides;
}

Dice.prototype.roll = function() {
	var randomNumber = Math.floor(Math.random() * this.sides) + 1;
	return randomNumber;
} 

var dice = new Dice(8);
var diceSix = new Dice (6);

console.log(dice.roll === diceSix.roll);