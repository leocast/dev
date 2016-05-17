//Challenge one
var array = [1,2,3,4,5];
//problem:  part one: iterate thruogh the array and print out the sum to the console
var counter = 0;
//for loop
//store value in variable i
//+= this each time
for (var i = 0; i < array.length; i++) {
	//console.log(array[i]);//console.log(i)
	counter += array[i];
}
console.log(counter);





//problem: part 2: use the .splice() method to insert the number 6 after the number 2. output to the console or print the array.

array.splice(2, 0, "6");


console.log(array.join(", "));


// for (var i = 0; i < array.length; i++) {
// array.splice(1,[6]);
// var myVar = array.join(', '); 
// }
// console.log(myVar);


// var myVar = array.join(', ');  
// console.log(myVar);
// var newArray = array.splice(1,[6]);
// console.log(newArray);